import { FC } from 'react'
import { UserIcon } from '@heroicons/react/20/solid'
import { StyledAvatar } from '.'

type Props = {
  name?: string
  color?: string
  size?: number
}

const Avatar: FC<Props> = ({ name, color, size = 38 }) => {
  const getInitials = () => {
    if (!name) {
      return <UserIcon />
    }

    const words = name.split(' ')
    const firstWord = words[0] || ' '
    const lastWord = words[1] || ' '

    return `${firstWord[0]}${lastWord[0]}`
  }

  return (
    <StyledAvatar className="avatar" color={color} size={size}>
      {getInitials()}
    </StyledAvatar>
  )
}

export default Avatar
