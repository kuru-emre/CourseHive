// Written by Jamel Hammoud
// B00858317 - jamel@dal.ca

import mongoose, { Types } from 'mongoose'
import { Request, Response } from 'express'
import { Course } from '../../models'
import { route } from '.'

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
