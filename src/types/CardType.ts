import { UserType } from './UserType'

export type CardType = {
  _id: string
  mode: string
  title: string
  img: string
  desc: string
  students: UserType[]
}
