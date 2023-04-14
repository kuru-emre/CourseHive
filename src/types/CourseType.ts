import { PostType, UserType } from './'

export type CourseType = {
  desc: string
  img: string
  _id: string
  title: string
  code: string
  students: UserType[]
  teachers: UserType[]
  theme: string
  assignments?: PostType[]
  createdAt: Date
}
