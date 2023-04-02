import mongoose, { Schema, model } from 'mongoose'

export type UserPreferencesType = {
  linkedin?: string
  hobbies?: string
  goals?: string
  experience?: string
}

export type UserType = {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  institution: string
  preferences: UserPreferencesType
  password: string
}

export const UserPreferencesSchema = new Schema<UserPreferencesType>({
  linkedin: String,
  hobbies: String,
  goals: String,
  experience: String
})

export const UserSchema = new Schema<UserType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    institution: { type: String, required: true },
    preferences: UserPreferencesSchema,
    password: { type: String, required: true }
  },
  { timestamps: true }
)

export const User = model<UserType>('User', UserSchema)
