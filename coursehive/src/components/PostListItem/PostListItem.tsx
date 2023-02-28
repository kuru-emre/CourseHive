import Tippy from '@tippyjs/react'
import { FC, useState } from 'react'
import { DateTime } from 'luxon'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { PostType } from '../../types'
import { Avatar, PostListItemDropdown } from '..'
import { StyledPostListItem } from '.'

type Props = {
  post: PostType
}

const PostListItem: FC<Props> = ({ post }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <StyledPostListItem>
      <div className="post-header">
        <div className="post-details-container">
          <Avatar username="Username" />
          <div className="post-details">
            <span className="post-user-name">Username</span>
            <span className="post-date">{DateTime.fromISO(post.sent).toLocaleString(DateTime.DATETIME_FULL)}</span>
          </div>
        </div>
        <Tippy
          trigger="click"
          visible={showDropdown}
          interactive={true}
          placement="bottom-end"
          onClickOutside={() => setShowDropdown(false)}
          render={attrs => (showDropdown ? <PostListItemDropdown post={post} {...attrs} /> : null)}
        >
          <button className="more-btn" onClick={() => setShowDropdown(!showDropdown)}>
            <EllipsisVerticalIcon />
          </button>
        </Tippy>
      </div>
      <div className="post-content">{post.content}</div>
    </StyledPostListItem>
  )
}

export default PostListItem
