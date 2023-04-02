import { FC, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { CourseCard, WidthController } from '../../components'
import { setCourses, useAppDispatch, useAppSelector } from '../../redux'
import { compareDates, getFirstName, useMailman } from '../../utils'
import { StyledHomeView } from './'

const HomeView: FC = () => {
  const dispatch = useAppDispatch()
  const { courses } = useAppSelector(state => state.courses)
  const { user } = useAppSelector(state => state.user)
  const [loading, setLoading] = useState(true)
  const { mailman } = useMailman()

  const loadCourses = async () => {
    try {
      setLoading(true)

      const data = await mailman('courses', '')

      if (!data?.courses) {
        return
      }

      dispatch(setCourses(data?.courses))
    } catch (err) {
      console.error(err)
      toast.error((err as any)?.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // if (!!courses.length) {
    //   return
    // }

    loadCourses()
  }, [])

  return (
    <StyledHomeView>
      <div className="splash-container">
        <WidthController>
          <div className="splash">
            <h1>Welcome back, {getFirstName(user?.name || '')}</h1>
            <p>What will you learn today?</p>
          </div>
        </WidthController>
      </div>
      <WidthController>
        <div className="course-list">
          {[...courses]
            .sort((a, b) => compareDates(b.createdAt, a.createdAt))
            .map(course => (
              <CourseCard course={course} key={course._id} />
            ))}
        </div>
      </WidthController>
    </StyledHomeView>
  )
}

export default HomeView
