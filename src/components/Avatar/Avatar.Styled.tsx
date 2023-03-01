import styled from 'styled-components'

const StyledAvatar = styled.div`
  height: 38px;
  width: 38px;
  background-color: ${({ theme }) => theme.color.indigo[200]};
  border-radius: 50%;
  flex-shrink: 0;
`

export default StyledAvatar
