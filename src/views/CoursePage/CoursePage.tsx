import { FC } from 'react'
import { Header, PostListItem, ShareInput } from '../../components'
import { useAppSelector } from '../../redux'
import { StyledCoursePage } from '.'

const CoursePage: FC = () => {
  const { title, code, theme, posts } = useAppSelector(state => state.course)

  return (
    <StyledCoursePage color={theme}>
      <div className="width-controller">
        <div className="course-splash">
          <div className="course-splash-heading">
            <h1>{title}</h1>
            <h2>Class code: {code}</h2>
          </div>
          <button className="course-splash-change-theme-btn">Change theme</button>
        </div>
        <ShareInput />
        <div className="post-list">
          {posts.map(post => {
            return <PostListItem post={post} key={post._id} />
          })}
        </div>
      </div>
    </StyledCoursePage>
  )
}

export default CoursePage
