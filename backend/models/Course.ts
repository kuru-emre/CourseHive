import { ObjectId, Schema, model } from 'mongoose'

export type CourseType = {
  _id: ObjectId
  title: string
  code: string
  teachers: string[]
  students: string[]
  theme: string
}

export const CourseSchema = new Schema<CourseType>(
  {
    title: { type: String, required: true },
    code: { type: String, required: true },
    teachers: { type: [String], required: true },
    students: { type: [String], required: true },
    theme: { type: String, required: true }
  },
  { timestamps: true }
)

export const Course = model<CourseType>('Course', CourseSchema)
