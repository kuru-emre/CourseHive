import { createRef, FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DateTime } from 'luxon'
import { Cog6ToothIcon, DocumentDuplicateIcon, PencilIcon, SwatchIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentListIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { Avatar, InputModal, OptionsPopover, PostList, ShareInput, Spinner, WidthController } from '../../components'
import { setCourse, setCourseIsTeacher, setCoursePosts, useAppDispatch, useAppSelector } from '../../redux'
import { copyToClipboard, useCourse, useMailman } from '../../utils'
import { UserType } from '../../types'
import { StyledCourseView } from '.'

const CourseView: FC = () => {
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const dispatch = useAppDispatch()
  const { _id }: any = useParams()
  const { mailman } = useMailman()
  const { course, posts, isTeacher } = useAppSelector(state => state.course)
  const { user } = useAppSelector(state => state.user)
  const { deleteCourse, toggleCourseTheme, renameCourse } = useCourse()
  const [showOptions, setShowOptions] = useState(false)
  const [showRenameModal, setShowRenameModal] = useState(false)

  const loadCourse = async () => {
    if (!_id) {
      return
    }

    const { course, posts } = await mailman('courses', _id)
    dispatch(setCourse(course))
    dispatch(setCoursePosts(posts))
    dispatch(setCourseIsTeacher(!!course.teachers.find((teacher: UserType) => teacher._id === user?._id)))
  }

  useEffect(() => {
    loadCourse()

    return () => {
      dispatch(setCourse(undefined))
      dispatch(setCourseIsTeacher(false))
    }
  }, [])

  if (!course?._id) {
    return (
      <WidthController>
        <StyledCourseView className="skeleton">
          <div className="skeleton-splash" />
          <div className="skeleton-content">
            <div className="skeleton-posts">
              <div />
              <div />
              <div />
            </div>
            <div className="skeleton-details">
              <div />
              <div />
            </div>
          </div>
        </StyledCourseView>
      </WidthController>
    )
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
              {isTeacher && (
                <button className="options-btn" ref={optionsBtnRef} onClick={() => setShowOptions(!showOptions)}>
                  <Cog6ToothIcon />
                </button>
              )}
            </div>
          </div>
          <div className="course-content">
            <div className="course-left">
              {isTeacher && (
                <div className="course-post-input">
                  <ShareInput course={course} />
                </div>
              )}
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
                <ul className="course-student-list">
                  {!course.students.length && (
                    <div className="empty-state">
                      <span className="empty-state-title">No enrolled students</span>
                      <span className="empty-state-body">Invite students to your course.</span>
                    </div>
                  )}
                  {course.students.map(student => {
                    return (
                      <li key={student._id}>
                        <Avatar name={student.name} color={course.theme} size={28} />
                        <span className="student-name">{student.name}</span>
                      </li>
                    )
                  })}
                </ul>
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
