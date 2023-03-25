import { createRef, FC, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { assign } from 'lodash'
import { DateTime } from 'luxon'
import { Cog6ToothIcon, DocumentDuplicateIcon, PencilIcon, SwatchIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentListIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { InputModal, OptionsPopover, PostList, ShareInput, WidthController } from '../../components'
import { useAppSelector } from '../../redux'
import { copyToClipboard, ROUTES, useCourse } from '../../utils'
import { StyledCourseView } from '.'

const CourseView: FC = () => {
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const { course, posts } = useAppSelector(state => state.course)
  const { deleteCourse, toggleCourseTheme, renameCourse } = useCourse()
  const [showOptions, setShowOptions] = useState(false)
  const [showRenameModal, setShowRenameModal] = useState(false)

  if (!course?._id) {
    return <Redirect to={ROUTES.App.home} />
  }

  return (
    <>
      <WidthController>
        <StyledCourseView color={course.theme}>
          <div className="course-splash">
            <h1>{course.title}</h1>
            <span className="course-code">
              Class code: {course.code}
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(course.code, 'Copied course code to your clipboard.')}
              >
                <DocumentDuplicateIcon />
              </button>
            </span>
            <div className="course-actions">
              <button className="options-btn" ref={optionsBtnRef} onClick={() => setShowOptions(!showOptions)}>
                <Cog6ToothIcon />
              </button>
            </div>
          </div>
          <div className="course-content">
            <div className="course-left">
              <div className="course-post-input">
                <ShareInput course={course} />
              </div>
              <PostList posts={posts.filter(post => post.course === course._id)} />
            </div>
            <div className="course-details">
              <div className="course-detail-panel">
                <div className="course-detail-panel-heading">
                  <ClipboardDocumentListIcon />
                  <span className="course-detail-panel-title">Upcoming Assignments</span>
                </div>
                <ul className="course-upcoming-list">
                  {posts
                    .filter(post => post.course === course._id && post.type === 'assignment')
                    .map(assignment => {
                      return (
                        <li key={assignment._id}>
                          <span className="assignment-title">{assignment.content}</span>
                          <span className="assignment-due-date">
                            Due {DateTime.fromISO(assignment.dueAt!).toRelative()}
                          </span>
                        </li>
                      )
                    })}

                  {!posts.filter(post => post.course === course._id && post.type === 'assignment').length && (
                    <div className="empty-state">
                      <img
                        src="https://ouch-cdn2.icons8.com/Hu_m_T7VgC5r9EfY7Ics-dvvm8W0ZwyrDfuTbeFUjlQ/rs:fit:256:143/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODM2/L2U5YmM5NjBkLTgy/NjYtNDEzMS1hNTUx/LTQ3MGFiMWQ2NTcz/Yy5wbmc.png"
                        alt=""
                      />
                      <span className="empty-state-title">No upcoming assignments</span>
                      <span className="empty-state-body">Assignments will appear here.</span>
                    </div>
                  )}
                </ul>
              </div>
              <div className="course-detail-panel">
                <div className="course-detail-panel-heading">
                  <UserGroupIcon />
                  <span className="course-detail-panel-title">Enrolled Students</span>
                </div>
                <div className="course-student-list">
                  <div className="empty-state">
                    <span className="empty-state-title">No enrolled students</span>
                    <span className="empty-state-body">Invite students to your course.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledCourseView>
      </WidthController>
      <OptionsPopover
        options={[
          {
            icon: <PencilIcon />,
            label: 'Rename course',
            action: () => setShowRenameModal(true)
          },
          {
            icon: <SwatchIcon />,
            label: 'Change theme',
            stayOpen: true,
            action: () => toggleCourseTheme(course._id, course.theme)
          },
          {
            icon: <TrashIcon />,
            label: 'Delete course',
            action: () => deleteCourse(course._id)
          }
        ]}
        width={180}
        divsAfter={['Change theme']}
        classToAvoid="options-btn"
        buttonRef={optionsBtnRef}
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
      />
      <InputModal
        confirmButtonText="Rename Course"
        defaultValue={course.title}
        isOpen={showRenameModal}
        onClose={() => setShowRenameModal(false)}
        onConfirm={value => renameCourse(course._id, value)}
      />
    </>
  )
}

export default CourseView
