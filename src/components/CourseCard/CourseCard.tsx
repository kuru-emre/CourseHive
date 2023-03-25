import { FC } from 'react'
import { Link } from 'react-router-dom'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { setCourse, useAppDispatch } from '../../redux'
import { CourseType } from '../../types'
import { StyledCourseCard } from '.'

type Props = {
  course: CourseType
}

const CourseCard: FC<Props> = ({ course }) => {
  const { _id, title, details, students, theme } = course
  const dispatch = useAppDispatch()

  const handleCourseClick = () => {
    dispatch(setCourse(course))
  }

  return (
    <StyledCourseCard color={theme}>
      <Link to={`courses/${_id}`} onClick={() => handleCourseClick()}>
        <div className="course-details-wrapper">
          <div className="course-details">
            <span className="course-name">{title}</span>
            <span className="course-count">
              {students} student{students > 1 ? 's' : ''}
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
