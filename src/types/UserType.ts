export type UserType = {
  _id: string
  name: string
  email: string
  institution: string
  preferences: {
    linkedin?: string
    hobbies?: string
    goals?: string
    experience?: string
  }
  password: string
}
