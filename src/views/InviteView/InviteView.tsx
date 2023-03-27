import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { StyledInviteView } from '.'
import { Spinner } from '../../components'
import { setCourse, useAppDispatch, useAppSelector } from '../../redux'
import { ROUTES, useCourse, useMailman } from '../../utils'

const InviteView: FC = () => {
  const { _id }: any = useParams()
  const dispatch = useAppDispatch()
  const { mailman } = useMailman()
  const history = useHistory()
  const { course } = useAppSelector((state) => state.course)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { joinCourse } = useCourse()

  const loadCourse = async () => {
    if (!_id) {
      return
    }

    const { course, alreadyInCourse } = await mailman('courses', `preview/${_id}`)
    dispatch(setCourse(course))

    if (alreadyInCourse) {
      history.push(ROUTES.App.courseById(_id))
    }
  }

  useEffect(() => {
    loadCourse()

    return () => {
      dispatch(setCourse(undefined))
    }
  }, [])

  if (!course?._id) {
    return <></>
  }

  return (
    <StyledInviteView color={course.theme}>
      <div className="invite-container">
        <div className="theme-banner"></div>

        <div className="invite-body">
          <div className="course-details">
            <h1 className="course-name">{course.title}</h1>
            <span className="course-count">
              {course.students.length} student{course.students.length !== 1 ? 's' : ''}
            </span>
          </div>

          <button className={`action-button`} onClick={() => joinCourse(course.code)} disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner size={18} />
            ) : (
              <span>
                Join Course <ArrowRightIcon />
              </span>
            )}
          </button>
        </div>
      </div>
    </StyledInviteView>
  )
}

export default InviteView
