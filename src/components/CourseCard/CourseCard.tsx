import { DateTime } from 'luxon'
import { createRef, FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { ArrowLeftOnRectangleIcon, DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline'

import { CourseType, UserType } from '../../types'
import { compareDates, copyToClipboard, ROUTES, useCourse } from '../../utils'
import { OptionsPopover } from '../popovers'
import { StyledCourseCard } from './'
import { useAppSelector } from '../../redux'

type Props = {
  course: CourseType
}

const CourseCard: FC<Props> = ({ course }) => {
  const { _id, title, students, theme } = course
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const [showOptions, setShowOptions] = useState(false)
  const { deleteCourse, leaveCourse } = useCourse()
  const { user } = useAppSelector((state) => state.user)

  const handleMoreOptionsClick = (e: any) => {
    e.preventDefault()
    setShowOptions(!showOptions)
  }

  const handleCopyInviteLink = () => {
    const inviteLink = `${window.location.origin}/invite/${course._id}/${course.code}`
    copyToClipboard(inviteLink, 'Copied invite link to your clipboard.')
  }

  return (
    <>
      <StyledCourseCard color={theme}>
        <Link to={ROUTES.App.courseById(_id)}>
          <div className="course-details-wrapper">
            <div className="course-details">
              <span className="course-name">{title}</span>
              <span className="course-count">
                {students.length} student{students.length !== 1 ? 's' : ''}
              </span>
            </div>
            <button className="more-btn" ref={optionsBtnRef} onClick={(e) => handleMoreOptionsClick(e)}>
              <EllipsisVerticalIcon />
            </button>
          </div>

          <div className="extra-details">
            {course.assignments &&
              [...course.assignments]
                .filter((assignment) => assignment.dueAt && assignment.dueAt > new Date().toISOString())
                .sort((a, b) => compareDates(a.dueAt, b.dueAt))
                .slice(0, 3)
                .map((assignment) => (
                  <li key={assignment._id}>
                    <span className="assignment-title">
                      ({DateTime.fromISO(assignment.dueAt!).toRelative()}) {assignment.content}
                    </span>
                  </li>
                ))}
          </div>
        </Link>
      </StyledCourseCard>

      <OptionsPopover
        options={
          !!course.teachers.find((teacher: UserType) => teacher._id === user?._id)
            ? [
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
              ]
            : [
                {
                  icon: <DocumentDuplicateIcon />,
                  label: 'Copy invite link',
                  action: () => handleCopyInviteLink()
                },
                {
                  icon: <ArrowLeftOnRectangleIcon />,
                  label: 'Leave Course',
                  action: () => leaveCourse(course._id)
                }
              ]
        }
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
