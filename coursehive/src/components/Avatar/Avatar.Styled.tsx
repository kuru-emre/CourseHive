import styled from 'styled-components'

const StyledAvatar = styled.div`
  height: 38px;
  width: 38px;
  background-color: ${({ theme }) => theme.color.gray[200]};
  color: ${({ theme }) => theme.color.gray[500]};
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledAvatar
