import { FC } from 'react'
import { CourseHeader, CourseShareInput, PostListItem } from '../../components'
import { useAppSelector } from '../../redux'
import { StyledCoursePageView } from '.'

const CoursePageView: FC = () => {
  const { title, code, theme, posts } = useAppSelector(state => state.course)

  return (
    <StyledCoursePageView color={theme}>
      <CourseHeader />
      <div className="width-controller">
        <div className="course-splash">
          <div className="course-splash-heading">
            <h1>{title}</h1>
            <h2>Class code: {code}</h2>
          </div>
          <button className="course-splash-change-theme-btn">Change theme</button>
        </div>
        <CourseShareInput />
        <div className="post-list">
          {posts.map(post => {
            return <PostListItem post={post} key={post._id} />
          })}
        </div>
      </div>
    </StyledCoursePageView>
  )
}

export default CoursePageView
