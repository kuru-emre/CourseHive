import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import { addCoursePost, removeCoursePost, useAppDispatch, useAppSelector } from '../../redux'
import { PostType } from '../../types'

export const usePost = () => {
  const dispatch = useAppDispatch()
  const { course } = useAppSelector(state => state.course)
  const { user } = useAppSelector(state => state.user)

  // Handles the logic of deleting a post
  const deletePost = async (_id: string) => {
    try {
      // First, remove from store.
      // This conveys a faster speed than reality.
      dispatch(removeCoursePost(_id))

      // Then, query the backend to
      // delete the post document.

      // TODO: QUERY BACKEND
    } catch (err) {
      console.error(err)
    }
  }

  const createPost = async (content: string, type: PostType['type']) => {
    try {
      // First, create the post document

      // TODO: QUERY BACKEND

      // For now, fake the result:
      const result = {
        _id: uuid(),
        content,
        type,
        course: course?._id!,
        user: user?._id!,
        createdAt: DateTime.now().toISO()
      }

      // Then, add the post to the store.
      dispatch(addCoursePost(result))
    } catch (err) {
      console.error(err)
    }
  }

  return {
    deletePost,
    createPost
  }
}
