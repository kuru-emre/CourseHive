import { FC, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { CourseCard, WidthController } from '../../components'
import { CourseType } from '../../types'
import { getFirstName } from '../../utils'
import { setCourses, useAppDispatch, useAppSelector } from '../../redux'
import { StyledHomeView } from '.'

const COURSES_DUMMY_DATA: CourseType[] = [
  {
    _id: '642089f5eaf628243b658ce9',
    title: 'Computer Science 101',
    code: 'ghd72f',
    students: [],
    teachers: [],
    theme: '#7c3aed'
  },
  {
    _id: '642089f5eaf628243b658cea',
    title: 'Cooking Class',
    code: 'fhaj2a',
    students: [],
    teachers: [],
    theme: '#4f46e5'
  },
  {
    _id: '642089f5eaf628243b658ceb',
    title: 'I own this class',
    code: 'lk87afa',
    students: [],
    teachers: [],
    theme: '#2563eb'
  },
  {
    _id: '642089f5eaf628243b658cec',
    title: 'I also own this class',
    code: 'poiw821',
    students: [],
    teachers: [],
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
