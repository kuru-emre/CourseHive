// Written by Jamel Hammoud
// B00858317 - jamel@dal.ca

import { Request, Response } from 'express'
import mongoose, { Types } from 'mongoose'

import { Course, Post, UserType } from '../../models'
import { route } from './'

route.get('/:_id', async (req: Request, res: Response) => {
  const user = req.user
  const { _id } = req.params

  if (!_id) {
    return res.status(400).json({ message: 'You must provide a course ID.' })
  }

  if (!Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: 'You must provide a valid Object ID.' })
  }

  const course = (
    await Course.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(_id)
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'teachers',
          foreignField: '_id',
          as: 'teachers'
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'students',
          foreignField: '_id',
          as: 'students'
        }
      },
      {
        $project: {
          'teachers.password': 0,
          'students.password': 0
        }
      }
    ])
  )[0]

  if (!course?._id) {
    return res.status(404).json({ message: 'Course does not exist.' })
  }

  const posts = await Post.aggregate([
    {
      $match: {
        course: course._id
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user'
      }
    },
    { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
    {
      $project: {
        'user.password': 0
      }
    }
  ])

  const isTeacher = !!course.teachers.find((teacher: UserType) => teacher._id.toString() === user._id.toString())
  const isStudent = !!course.students.find((student: UserType) => student._id.toString() === user._id.toString())

  if (!isTeacher && !isStudent) {
    return res.status(404).json({ message: 'User does not have access to course.' })
  }

  res.json({
    course,
    posts,
    status: 'ok'
  })
})

// Written by Ben Hoeg
// B00870824 - benhoeg@dal.ca
route.get('/', async (req: Request, res: Response) => {
  const user = req.user

  const courses = await Course.aggregate([
    // Match courses that this user is either a student or teacher of
    {
      $match: {
        $or: [{ students: user._id }, { teachers: user._id }]
      }
    },
    // Join the user details for both students and teachers of the course
    {
      $lookup: {
        from: 'users',
        localField: 'teachers',
        foreignField: '_id',
        as: 'teachers'
      }
    },
    {
      $lookup: {
        from: 'users',
        localField: 'students',
        foreignField: '_id',
        as: 'students'
      }
    },
    // Do not return sensitive info to the client
    {
      $project: {
        'teachers.password': 0,
        'students.password': 0
      }
    },
    // Join the assignments for each course
    {
      $lookup: {
        from: 'posts',
        let: { course_id: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $eq: ['$course', '$$course_id'] }, { $eq: ['$type', 'assignment'] }]
              }
            }
          }
        ],
        as: 'assignments'
      }
    }
  ])

  res.json({
    courses,
    status: 'ok'
  })
})

// Written by Ben Hoeg
// B00870824 - benhoeg@dal.ca

// Used to generate a preview of the course for invite links
route.get('/preview/:_id', async (req: Request, res: Response) => {
  const user = req.user
  const { _id } = req.params

  if (!_id) {
    return res.status(400).json({ message: 'You must provide a course ID.' })
  }

  if (!Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: 'You must provide a valid Object ID.' })
  }

  const course = await Course.findById(_id)

  if (!course) {
    return res.status(404).json({ message: 'Course not found.' })
  }

  const alreadyInCourse =
    !!course.teachers.find(teacher => teacher.equals(user._id)) ||
    !!course.students.find(student => student.equals(user._id))

  res.json({
    course,
    alreadyInCourse,
    status: 'ok'
  })
})
