import bcrypt from 'bcrypt'
import mongoose, { Types } from 'mongoose'
import { Request, Response } from 'express'
import { User } from '../../models'
import { route } from '.'

route.post('/register', async (req: Request, res: Response) => {
  const { body } = req

  const exists = await User.exists({ email: body.email })

  if (!!exists) {
    return res.status(400).json({ message: 'User already exists.' })
  }

  const hashedPassword = await bcrypt.hash(body.password, 10)
  const user = await User.create({ ...body, password: hashedPassword })

  res.json({
    user: {
      ...user.toObject(),
      password: null
    },
    status: 'ok'
  })
})

route.post('/login', async (req: Request, res: Response) => {
  const { body } = req

  const user = await User.findOne({ email: body.email })

  if (!user) {
    return res.status(400).json({ message: 'User does not exist.' })
  }

  const hashedPassword = user.password
  const passwordsMatch = await bcrypt.compare(body.password, hashedPassword)

  if (!passwordsMatch) {
    return res.status(400).json({ message: 'Invalid password.' })
  }

  res.json({
    user: {
      ...user.toObject(),
      password: null
    },
    status: 'ok'
  })
})

route.post('/:_id', async (req: Request, res: Response) => {
  const { body, params } = req
  const { _id } = params

  if (!_id) {
    return res.status(400).json({ message: 'You must provide a user ID.' })
  }

  if (!Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ message: 'You must provide a valid Object ID.' })
  }

  await User.updateOne({ _id: new mongoose.Types.ObjectId(_id) }, { ...body })

  res.json({
    status: 'ok'
  })
})
