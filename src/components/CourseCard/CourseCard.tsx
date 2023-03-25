import { FC } from 'react'
import { Link } from 'react-router-dom'
import { DateTime } from 'luxon'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { setCourse, useAppDispatch, useAppSelector } from '../../redux'
import { CourseType } from '../../types'
import { StyledCourseCard } from '.'

type Props = {
  course: CourseType
}

const CourseCard: FC<Props> = ({ course }) => {
  const { _id, title, students, theme } = course
  const { posts } = useAppSelector(state => state.course)
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

        <div className="extra-details">
          {posts
            .filter(post => post.course === course._id && post.type === 'assignment')
            .map(assignment => {
              return (
                <li key={assignment._id}>
                  <span className="assignment-title">
                    ({DateTime.fromISO(assignment.dueAt!).toRelative()}) {assignment.content}
                  </span>
                </li>
              )
            })}
        </div>
      </Link>
    </StyledCourseCard>
  )
}

export default CourseCard
