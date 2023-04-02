import styled, { keyframes } from 'styled-components'

const popInAnim = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const popOutAnim = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(6px) scale(0.95);
  }
`

type StyledProps = {
  showCloseAnim?: boolean
}

const StyledPopover = styled.div<StyledProps>`
  position: fixed;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
    0px 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 999999;
  animation: forwards 0.05s ease-in-out
    ${({ showCloseAnim }) => (showCloseAnim ? popOutAnim : popInAnim)};
`

export default StyledPopover
