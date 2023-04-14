// Written by Jamel Hammoud
// B00858317 - jamel@dal.ca

import mongoose, { Types } from 'mongoose'
import { Request, Response } from 'express'
import { Course } from '../../models'
import { route } from '.'
import { generateCourseCode } from '../../utils'

route.post('/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params

  if (!_id) {
    return res.status(400).json({ message: 'You must provide a course ID.' })
  }

  if (!Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: 'You must provide a valid Object ID.' })
  }

  await Course.updateOne({ _id: new mongoose.Types.ObjectId(_id) }, { ...req.body })

  res.json({
    status: 'ok'
  })
})

// Written by Ben Hoeg
// B00870824 - benhoeg@dal.ca
route.post('/', async (req: Request, res: Response) => {
  const user = req.user
  const { title } = req.body

  if (!title) {
    return res.status(400).json({ message: 'You must provide a course name' })
  }

  const COURSE_THEMES = ['#7c3aed', '#4f46e5', '#2563eb', '#9333ea']

  const courseCode = await generateCourseCode()

  const COURSE_IMG = [
    'https://cdn.pixabay.com/photo/2012/07/06/15/48/arches-national-park-51612_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/02/11/15/29/fort-jefferson-80555_960_720.jpg',
    'https://cdn.pixabay.com/photo/2013/11/11/15/06/horses-208827_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/02/22/17/15/beach-2090017_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/02/28/19/42/crater-lake-277123_960_720.jpg'
  ]

  const newCourse = {
    title,
    img: COURSE_IMG[Math.floor(Math.random() * COURSE_IMG.length)],
    desc: 'None',
    code: courseCode,
    students: [],
    teachers: [user._id], // User should be a teacher if they are creating the course
    theme: COURSE_THEMES[Math.floor(Math.random() * COURSE_THEMES.length)]
  }

  const createdCourse = await Course.create(newCourse)

  if (!createdCourse) {
    return res.status(400).json({ message: 'Could not create course' })
  }

  res.json({
    createdCourse,
    status: 'ok'
  })
})

// Written by Ben Hoeg
// B00870824 - benhoeg@dal.ca
route.post('/join/:code', async (req: Request, res: Response) => {
  const user = req.user
  const { code } = req.params

  if (!code) {
    return res.status(401).json({ message: 'You must provide a course code' })
  }

  const findCourse = await Course.findOne({ code: code })

  if (!findCourse) {
    return res.status(400).json({ message: 'The course code is incorrect' })
  }

  // Handle if user is already a student of this course
  if (findCourse.students.includes(user._id)) {
    return res.status(400).json({ message: 'You are already in this course' })
  }

  // Handle if user is a teacher of this course
  if (findCourse.teachers.includes(user._id)) {
    return res.status(400).json({ message: 'You are an instructor of this course' })
  }

  // This user is not yet a member of the course, so add them to the students array
  findCourse.students.push(user._id)

  const addUserToCourse = await Course.updateOne({ code: code }, { students: findCourse.students })

  if (!addUserToCourse) {
    return res.status(400).json({ message: 'Failed to join course' })
  }

  res.json({
    updatedCourse: findCourse,
    status: 'ok'
  })
})

// Written by Ben Hoeg
// B00870824 - benhoeg@dal.ca
route.post('/leave/:_id', async (req: Request, res: Response) => {
  const user = req.user
  const { _id } = req.params

  if (!_id) {
    return res.status(400).json({ message: 'You must provide the course id' })
  }

  const course = await Course.findOne({ _id: _id })

  if (!course) {
    return res.status(404).json({ message: `Could not find course with id: ${_id}` })
  }

  // Remove this user from the students array and update the course document
  const removeStudent = course.students.filter((student) => !student.equals(user._id))
  const updatedCourse = await Course.updateOne({ _id: _id }, { students: removeStudent })

  if (!updatedCourse) {
    return res.status(400).json({ message: 'Failed to leave course' })
  }

  res.json({
    updatedCourse,
    status: 'ok'
  })
})
