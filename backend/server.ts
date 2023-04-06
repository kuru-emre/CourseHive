// Written by Jamel Hammoud
// B00858317 - jamel@dal.ca

import cors from 'cors'
import cookieParser from 'cookie-parser'
import express from 'express'
import dotenv from 'dotenv'
import { connectToMongo } from './utils'
import { CourseRoute, PostRoute, UserRoute, SettingsRoute } from './routes'
import { User, UserType } from './models'

declare global {
  namespace Express {
    interface Request {
      user: UserType
    }
  }
}

const App = async () => {
  try {
    dotenv.config()
    await connectToMongo()

    const app = express()
    const PORT = 52635

    app.use(cookieParser())
    app.use(cors({ origin: true, credentials: true }))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    // Check is user is logged in, and if they are,
    // attaches the user document to the request
    app.use(async (req, res, next) => {
      const userId = req.headers['user-id']

      if (!userId) {
        return next()
        // return res.status(401).json({ message: 'You must be logged in to perform this action.' })
      }

      const user = await User.findById(userId)

      if (!user?._id) {
        return res.status(404).json({ message: "Couldn't find logged in user." })
      }

      req.user = user

      next()
    })

    app.use('/courses', CourseRoute)
    app.use('/users', UserRoute)
    app.use('/posts', PostRoute)
    app.use('/settings', SettingsRoute)

    app.listen(PORT, () => {
      return console.log(`Server is listening on ${PORT}`)
    })
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

App()
