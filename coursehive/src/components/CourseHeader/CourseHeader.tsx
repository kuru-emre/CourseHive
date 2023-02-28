import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useAppSelector } from '../../redux'
import { ROUTES } from '../../utils'
import { Avatar } from '..'
import { StyledCourseHeader } from '.'

const CourseHeader: FC = () => {
  const { title } = useAppSelector(state => state.course)

  return (
    <StyledCourseHeader>
      <div className="header-group">
        <Link to={ROUTES.courses.courses}>
          <ArrowLeftIcon />
        </Link>
        <div className="course-details">
          <span className="course-title">{title}</span>
          <span className="course-students">123 students</span>
        </div>
      </div>
      <div className="header-group">
        <Link to={ROUTES.users.userById('me')}>
          <Avatar username="Username" />
        </Link>
      </div>
    </StyledCourseHeader>
  )
}

export default CourseHeader
