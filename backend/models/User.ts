import { ObjectId, Schema, model } from 'mongoose'

export type UserType = {
  _id: ObjectId
  name: string
  email: string
  password: string
}

export const UserSchema = new Schema<UserType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

export const User = model<UserType>('User', UserSchema)
