import { FC, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { CourseCard, WidthController } from '../../components'
import { CourseType } from '../../types'
import { getFirstName } from '../../utils'
import { setCourses, useAppDispatch, useAppSelector } from '../../redux'
import { StyledHomeView } from '.'

const COURSES_DUMMY_DATA: CourseType[] = [
  {
    _id: '8572387572',
    title: 'Computer Science 101',
    code: 'ghd72f',
    students: 25,
    theme: '#7c3aed'
  },
  {
    _id: '1572387572',
    title: 'Cooking Class',
    code: 'fhaj2a',
    students: 122,
    theme: '#4f46e5'
  },
  {
    _id: '3572387572',
    title: 'Origami Fundamentals',
    code: 'lk87afa',
    students: 38,
    theme: '#2563eb'
  },
  {
    _id: '6572387572',
    title: 'Ancient Rome',
    code: 'poiw821',
    students: 221,
    theme: '#9333ea'
  }
]

const HomeView: FC = () => {
  const dispatch = useAppDispatch()
  const { courses } = useAppSelector(state => state.courses)
  const { user } = useAppSelector(state => state.user)
  const [loading, setLoading] = useState(true)

  const loadCourses = async () => {
    try {
      setLoading(true)

      // TODO: QUERY COURSES

      // For now, use dummy data:
      dispatch(setCourses(COURSES_DUMMY_DATA))
    } catch (err) {
      console.error(err)
      toast.error((err as any)?.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!!courses.length) {
      return
    }

    loadCourses()
  }, [courses])

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
          {courses.map(course => (
            <CourseCard course={course} key={course._id} />
          ))}
        </div>
      </WidthController>
    </StyledHomeView>
  )
}

export default HomeView
