// Written by Emre Kuru
// B00837309 - ekuru@dal.ca
import { Request, Response } from 'express'
import { Course } from '../../models'
import { route } from './'

route.delete('/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params

  await Course.deleteOne({ _id })

  res.json({
    status: 'ok'
  })
})
