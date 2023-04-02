import { UserType } from '.'

export type PostType = {
  _id: string
  content: string
  type: 'post' | 'assignment'
  course: string
  user: UserType
  dueAt?: string
  createdAt: string
}
