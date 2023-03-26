// Written by Jamel Hammoud
// B00858317 - jamel@dal.ca

import mongoose, { Types } from 'mongoose'
import { Request, Response } from 'express'
import { Course, Post, UserType } from '../../models'
import { route } from '.'

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
