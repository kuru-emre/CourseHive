import { FC } from 'react'
import { UserIcon } from '@heroicons/react/20/solid'
import { StyledAvatar } from '.'

const Avatar: FC = () => {
  return (
    <StyledAvatar>
      <UserIcon />
    </StyledAvatar>
  )
}

export default Avatar
