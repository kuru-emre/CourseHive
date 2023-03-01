import { FC } from 'react'
import { DateTime } from 'luxon'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { PostType } from '../../types'
import { Avatar } from '..'
import { StyledPostListItem } from '.'

type Props = {
  post: PostType
}

const PostListItem: FC<Props> = ({ post }) => {
  return (
    <StyledPostListItem>
      <div className="post-header">
        <div className="post-details-container">
          <Avatar/>
          <div className="post-details">
            <span className="post-user-name">Jamel Hammoud</span>
            <span className="post-date">{DateTime.fromISO(post.sent).toRelative()}</span>
          </div>
        </div>
        <button className="more-btn"><EllipsisVerticalIcon/></button>
      </div>
      <div className="post-content">
        {post.content}
      </div>
    </StyledPostListItem>
  )
}

export default PostListItem
