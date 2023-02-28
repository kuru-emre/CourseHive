import { FC } from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PostType } from '../../../types'
import { StyledPostListItemDropdown } from '.'
import { removePost, useAppDispatch } from '../../../redux'

type Props = {
  post: PostType
  [x: string]: any
}

const PostListItemDropdown: FC<Props> = ({ post, ...rest }) => {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(removePost(post._id))
  }

  return (
    <StyledPostListItemDropdown {...rest}>
      <button onClick={() => handleDelete()}>
        <TrashIcon /> Delete Post
      </button>
    </StyledPostListItemDropdown>
  )
}

export default PostListItemDropdown
