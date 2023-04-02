// Written by Jamel Hammoud
// B00858317 - jamel@dal.ca

import { Request, Response } from 'express'
import { Post } from '../../models'
import { route } from '.'

route.post('/', async (req: Request, res: Response) => {
  const user = req.user

  const post = await Post.create({ ...req.body, user: user._id })

  res.json({
    post,
    status: 'ok'
  })
})
