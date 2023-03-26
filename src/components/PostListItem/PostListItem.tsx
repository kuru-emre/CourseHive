import { createRef, FC, useState } from 'react'
import { DateTime } from 'luxon'
import { EllipsisVerticalIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PostType } from '../../types'
import { usePost } from '../../utils'
import { useAppSelector } from '../../redux'
import { Avatar, OptionsPopover } from '..'
import { StyledPostListItem } from '.'

type Props = {
  post: PostType
}

const PostListItem: FC<Props> = ({ post }) => {
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const { isTeacher, course } = useAppSelector(state => state.course)
  const { deletePost } = usePost()
  const [showOptions, setShowOptions] = useState(false)

  return (
    <>
      <StyledPostListItem>
        <div className="post-header">
          <div className="post-details-container">
            <Avatar name={post.user.name} color={course?.theme} />
            <div className="post-details">
              <span className="post-user-name">{post.user.name}</span>
              <span className="post-date">
                {DateTime.fromISO(post.createdAt).toRelative()}{' '}
                {post.type === 'assignment' && <>| Due {DateTime.fromISO(post.dueAt!).toRelative()}</>}
              </span>
            </div>
          </div>
          {isTeacher && (
            <button className="options-btn" ref={optionsBtnRef} onClick={() => setShowOptions(!showOptions)}>
              <EllipsisVerticalIcon />
            </button>
          )}
        </div>
        <div className="post-content">{post.content}</div>
      </StyledPostListItem>
      <OptionsPopover
        options={[
          {
            icon: <TrashIcon />,
            label: 'Delete post',
            action: () => deletePost(post._id)
          }
        ]}
        width={150}
        classToAvoid="options-btn"
        buttonRef={optionsBtnRef}
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
      />
    </>
  )
}

export default PostListItem
