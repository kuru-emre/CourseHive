import { ObjectId, Schema, model, Types } from 'mongoose'

export type PostType = {
  _id: ObjectId
  content: string
  type: 'post' | 'assignment'
  course: ObjectId
  user: ObjectId
  dueAt?: string
}

export const PostSchema = new Schema<PostType>(
  {
    content: { type: String, required: true },
    type: { type: String, required: true },
    course: { type: Types.ObjectId, required: true },
    user: { type: Types.ObjectId, required: true },
    dueAt: String
  },
  { timestamps: true, versionKey: false }
)

export const Post = model<PostType>('Post', PostSchema)
