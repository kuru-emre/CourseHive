import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { setCode, setTheme, setTitle, useAppDispatch } from '../../redux'
import { CourseType } from '../../types'
import { StyledCourseCard } from './'

type Props = {
  course: CourseType
}

const CourseCard: FC<Props> = ({ course }) => {
  const { id, name, code, studentCount, details, theme } = course
  const dispatch = useAppDispatch()

  const handleCourseClick = () => {
    dispatch(setTitle(name))
    dispatch(setTheme(theme))
    dispatch(setCode(code))
  }

  return (
    <StyledCourseCard color={theme}>
      <Link to={`courses/${id}`} onClick={() => handleCourseClick()}>
        <div className="course-details-wrapper">
          <div className="course-details">
            <span className="course-name">{name}</span>
            <span className="course-count">
              {studentCount} student{studentCount > 1 ? 's' : ''}
            </span>
          </div>
          <button className="more-btn">
            <EllipsisVerticalIcon />
          </button>
        </div>

        {details && (
          <ul className="extra-details">
            {details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
      </Link>
    </StyledCourseCard>
  )
}

export default CourseCard
