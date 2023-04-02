import styled from 'styled-components'

type StyledProps = {
  color?: string
  size: number
}

const StyledAvatar = styled.div<StyledProps>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${({ theme, color }) => (color ? `${color}20` : theme.color.gray[200])};
  color: ${({ theme, color }) => color || theme.color.gray[600]};
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${({ size }) => size * 0.7}px;
  }
`

export default StyledAvatar
