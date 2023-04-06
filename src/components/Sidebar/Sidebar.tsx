import { FC, useEffect } from 'react'
import { StyledSidebar } from '.'
import { useAppSelector } from '../../redux'
import { useSettings } from '../../utils'

const Sidebar: FC = () => {
  const { courses } = useAppSelector((state) => state.courses)
  const { getCourses } = useSettings()

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <StyledSidebar>
      <div className="sidebar">
        <h2 className="title">My Courses</h2>
        <hr style={{ width: '100%' }} />
        {[...courses].map((course) => (
          <a key={course._id} style={{ backgroundColor: course.theme, color: 'white' }}>
            {course.title}
          </a>
        ))}
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
