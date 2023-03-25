export type PostType = {
  _id: string
  content: string
  type: 'post' | 'assignment'
  course: string
  user: string
  createdAt: string
}
