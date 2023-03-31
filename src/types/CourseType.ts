import { PostType, UserType } from './'

export type CourseType = {
  _id: string
  title: string
  code: string
  students: UserType[]
  teachers: UserType[]
  theme: string
  assignments?: PostType[]
  createdAt: Date
}
