// Written by Ben Hoeg
// B00870824 - benhoeg@dal.ca

import { Request, Response } from 'express'

import { Course } from '../../models'
import { route } from './'

route.delete('/:_id', async (req: Request, res: Response) => {
  const user = req.user
  const { _id } = req.params

  const courseToBeDeleted = await Course.findOne({ _id: _id, teachers: user._id })

  if (!courseToBeDeleted) {
    return res.status(401).json({ message: 'You do not have permission to delete this course' })
  }

  // This user is a teacher of the course so continue with deletion
  const deleteCourse = await Course.deleteOne({ _id: _id })

  if (!deleteCourse) {
    return res.status(400).json({ message: 'There was a problem deleting the course' })
  }

  res.json({
    status: 'ok'
  })
})
