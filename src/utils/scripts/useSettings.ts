// Written by Emre Kuru
// B00837309 - ekuru@dal.ca
import { setCourse, setCourses, useAppDispatch } from '../../redux'
import { useMailman } from '..'

export const useSettings = () => {
  const dispatch = useAppDispatch()
  const { mailman } = useMailman()

  const getCourses = async () => {
    try {
      const data = await mailman('settings', '')
      dispatch(setCourses(data.courses))
    } catch (err) {
      console.error(err)
    }
  }

  const updateCourse = async (_id: string, props: Object) => {
    try {
      const data = await mailman('settings', _id, 'POST', { ...props })
      dispatch(setCourse(data))
    } catch (err) {
      console.error(err)
    }
  }

  const deleteCourse = async (_id: string) => {
    try {
      await mailman('settings', _id, 'DELETE')
    } catch (err) {
      console.error(err)
    }
  }

  return {
    getCourses,
    deleteCourse,
    updateCourse
  }
}
