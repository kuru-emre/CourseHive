import { removeCoursePost, useAppDispatch } from '../../redux'

export const usePost = () => {
  const dispatch = useAppDispatch()

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

  return {
    deletePost
  }
}
