// Written by Jamel Hammoud
// B00858317 - jamel@dal.ca

import { Types } from 'mongoose'
import { Request, Response } from 'express'
import { Post } from '../../models'
import { route } from '.'

route.delete('/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params

  if (!_id) {
    return res.status(400).json({ message: 'You must provide a post ID.' })
  }

  if (!Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: 'You must provide a valid Object ID.' })
  }

  await Post.deleteOne({ _id })

  res.json({
    status: 'ok'
  })
})
