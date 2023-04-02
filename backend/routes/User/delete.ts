import mongoose, { Types } from 'mongoose'
import { Request, Response } from 'express'
import { User } from '../../models'
import { route } from '.'

route.delete('/:_id', async (req: Request, res: Response) => {
  const { params } = req
  const { _id } = params

  if (!_id) {
    return res.status(400).json({ message: 'You must provide a user ID.' })
  }

  if (!Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: 'You must provide a valid Object ID.' })
  }

  await User.deleteOne({ _id: new mongoose.Types.ObjectId(_id) })

  res.json({
    status: 'ok'
  })
})
