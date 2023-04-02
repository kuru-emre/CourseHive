import mongoose, { ObjectId, Schema, model } from 'mongoose'

export type CourseType = {
  _id: ObjectId
  title: string
  code: string
  teachers: mongoose.Types.ObjectId[]
  students: mongoose.Types.ObjectId[]
  theme: string
}

export const CourseSchema = new Schema<CourseType>(
  {
    title: { type: String, required: true },
    code: { type: String, required: true },
    teachers: { type: [mongoose.Types.ObjectId], required: true },
    students: { type: [mongoose.Types.ObjectId], required: true },
    theme: { type: String, required: true }
  },
  { timestamps: true }
)

export const Course = model<CourseType>('Course', CourseSchema)
