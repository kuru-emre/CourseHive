// Written by Emre Kuru
// B00837309 - ekuru@dal.ca
import { Request, Response } from 'express'
import { Course } from '../../models'
import { route } from './'

route.get('/', async (req: Request, res: Response) => {
  const user = req.user

  const courses = await Course.aggregate([
    {
      $match: {
        teachers: user._id
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
    
  ])

  res.json({
    courses,
    status: 'ok'
  })
})
