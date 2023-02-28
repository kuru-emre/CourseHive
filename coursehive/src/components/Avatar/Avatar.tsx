import { FC } from 'react'
import { StyledAvatar } from '.'

type Props = {
  username: string
}

const Avatar: FC<Props> = ({ username }) => {
  return <StyledAvatar>{username[0]}</StyledAvatar>
}

export default Avatar
