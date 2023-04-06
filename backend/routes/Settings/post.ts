// Written by Emre Kuru
// B00837309 - ekuru@dal.ca
import { Request, Response } from 'express'
import { Course } from '../../models'
import { route } from './'

route.post('/:_id', async (req: Request, res: Response) => {
  const { body, params } = req
  const { _id } = params

  const course = await Course.updateOne({ _id: _id }, { $set: { ...body } })

  res.json({
    course,
    status: 'ok'
  })
})
