import { useHistory } from 'react-router-dom'
import { removeCourse, updateCourse, updateCourses, useAppDispatch } from '../../redux'
import { ROUTES, useMailman } from '..'

export const useCourse = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { mailman } = useMailman()

  const renameCourse = async (_id: string, title: string) => {
    try {
      // First, changes the title in the store.
      // This conveys a faster speed than reality.

      dispatch(
        updateCourse({
          title
        })
      )

      dispatch(
        updateCourses({
          _id,
          course: { title }
        })
      )

      // Then, query the backend to
      // update the course document.

      await mailman('courses', _id, 'POST', {
        title
      })
    } catch (err) {
      console.error(err)
    }
  }

  const deleteCourse = async (_id: string) => {
    try {
      // First, remove from store.
      // This conveys a faster speed than reality.

      dispatch(removeCourse(_id))

      // Then, query the backend to
      // delete the course document.

      // TODO: QUERY BACKEND

      // Finally, redirect the user to the Courses page.
      history.push(ROUTES.App.home)
    } catch (err) {
      console.error(err)
    }
  }

  const toggleCourseTheme = async (_id: string, theme: string) => {
    try {
      const THEMES = ['#7c3aed', '#4f46e5', '#2563eb', '#9333ea']
      const currTheme = THEMES.indexOf(theme)
      const nextTheme = currTheme === THEMES.length - 1 ? 0 : currTheme + 1

      // First, changes the theme in the store.
      // This conveys a faster speed than reality.

      dispatch(
        updateCourse({
          theme: THEMES[nextTheme]
        })
      )

      dispatch(
        updateCourses({
          _id,
          course: {
            theme: THEMES[nextTheme]
          }
        })
      )

      // Then, query the backend to
      // update the course document.

      await mailman('courses', _id, 'POST', {
        theme: THEMES[nextTheme]
      })
    } catch (err) {
      console.error(err)
    }
  }

  return {
    renameCourse,
    deleteCourse,
    toggleCourseTheme
  }
}
