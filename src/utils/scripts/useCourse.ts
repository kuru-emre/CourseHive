import { useHistory } from 'react-router-dom'
import { removeCourse, updateCourse, updateCourses, addCourse, useAppDispatch } from '../../redux'
import { ROUTES, useMailman } from '..'
import { CourseType } from '../../types'

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

  const createCourse = async (courseName: string) => {
    try {
      const { createdCourse } = await mailman('courses', '', 'POST', {
        title: courseName
      })

      // Update the store with the new course
      dispatch(addCourse(createdCourse))

      // Finally, redirect the user to the newly created course
      history.push(ROUTES.App.courseById(createdCourse._id))
    } catch (err) {
      console.error(err)
    }
  }

  const joinCourse = async (courseCode: string) => {
    try {
      const { updatedCourse } = await mailman('courses', `join/${courseCode}`, 'POST')

      // Add joined course to the store
      dispatch(
        updateCourses({
          _id: updatedCourse._id,
          course: updatedCourse
        })
      )

      // Finally, redirect the user to the joined course
      history.push(ROUTES.App.courseById(updatedCourse._id))
    } catch (err) {
      console.error(err)
    }
  }

  const leaveCourse = async (_id: string) => {
    try {
      // First, remove from store.
      // This conveys a faster speed than reality.

      dispatch(removeCourse(_id))

      // Then, query the backend to
      // remove the student from the course.

      await mailman('courses', `leave/${_id}`, 'POST')

      // Finally, redirect the user to the Courses page.
      history.push(ROUTES.App.home)
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

      await mailman('courses', _id, 'DELETE')

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
    createCourse,
    joinCourse,
    leaveCourse,
    deleteCourse,
    toggleCourseTheme
  }
}
