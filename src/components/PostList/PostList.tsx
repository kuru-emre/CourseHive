import { FC } from 'react'
import { PostType } from '../../types'
import { PostListItem } from '..'
import { StyledPostList } from '.'

type Props = {
  posts: PostType[]
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <StyledPostList>
      {!posts.length && (
        <div className="empty-state">
          <img
            src="https://ouch-cdn2.icons8.com/bE7aGf2MRNodR-sHOa8Yqg1vO9MPakwvXbwZpcQX5CU/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjM1/L2MwOTgyMmQ5LTVi/NWQtNDMwZi1iYTM3/LWYzZDlkZmExOWVk/My5wbmc.png"
            alt="No Posts"
          />
          <span className="empty-state-title">This class has no posts</span>
          <span className="empty-state-body">When your teacher creates a post, you'll see it here.</span>
        </div>
      )}
      {!!posts.length && (
        <div className="post-list">
          {posts.map(post => {
            return <PostListItem post={post} key={post._id} />
          })}
        </div>
      )}
    </StyledPostList>
  )
}

export default PostList
