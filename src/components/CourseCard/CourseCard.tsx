import { DateTime } from 'luxon'
import { createRef, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline'

import { setCourse, useAppDispatch, useAppSelector } from '../../redux'
import { CourseType } from '../../types'
import { copyToClipboard, useCourse } from '../../utils'
import { OptionsPopover } from '../popovers'
import { StyledCourseCard } from './'

type Props = {
  course: CourseType
}

const CourseCard: FC<Props> = ({ course }) => {
  const { _id, title, students, theme } = course
  const { posts } = useAppSelector((state) => state.course)
  const dispatch = useAppDispatch()
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const [showOptions, setShowOptions] = useState(false)
  const { deleteCourse } = useCourse()

  const handleCourseClick = () => {
    dispatch(setCourse(course))
  }

  const handleMoreOptionsClick = (e: any) => {
    e.preventDefault()
    setShowOptions(!showOptions)
  }

  const handleCopyInviteLink = () => {
    const inviteLink = `${window.location.origin}/invite/${course.code}`
    copyToClipboard(inviteLink, 'Copied invite link to your clipboard.')
  }

  return (
    <>
      <StyledCourseCard color={theme}>
        <Link to={`courses/${_id}`} onClick={() => handleCourseClick()}>
          <div className="course-details-wrapper">
            <div className="course-details">
              <span className="course-name">{title}</span>
              <span className="course-count">
                {students} student{students > 1 ? 's' : ''}
              </span>
            </div>
            <button className="more-btn" ref={optionsBtnRef} onClick={(e) => handleMoreOptionsClick(e)}>
              <EllipsisVerticalIcon />
            </button>
          </div>

          <div className="extra-details">
            {posts
              .filter((post) => post.course === course._id && post.type === 'assignment')
              .map((assignment) => {
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

      <OptionsPopover
        options={[
          {
            icon: <DocumentDuplicateIcon />,
            label: 'Copy invite link',
            action: () => handleCopyInviteLink()
          },
          {
            icon: <TrashIcon />,
            label: 'Delete course',
            action: () => deleteCourse(course._id)
          }
        ]}
        width={180}
        divsAfter={['Copy invite link']}
        classToAvoid="more-btn"
        buttonRef={optionsBtnRef}
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
      />
    </>
  )
}

export default CourseCard
