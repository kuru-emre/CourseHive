import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import { addCoursePost, removeCoursePost, useAppDispatch, useAppSelector } from '../../redux'
import { PostType } from '../../types'
import { useMailman } from '.'

export const usePost = () => {
  const dispatch = useAppDispatch()
  const { mailman } = useMailman()
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
      await mailman('posts', _id, 'DELETE')
    } catch (err) {
      console.error(err)
    }
  }

  const createPost = async (content: string, type: PostType['type'], dueAt?: string) => {
    try {
      // First, create the post document
      const { post } = await mailman('posts', '', 'POST', {
        content,
        type,
        dueAt,
        course: course?._id
      })

      // Then, add the post to the store.
      dispatch(
        addCoursePost({
          ...post,
          user
        })
      )
    } catch (err) {
      console.error(err)
    }
  }

  return {
    deletePost,
    createPost
  }
}
