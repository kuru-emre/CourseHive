import styled from 'styled-components'

type StyledProps = {
  noOverflow?: boolean
  isOpen?: boolean
}

const StyledDialog = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: ${({ theme }) => theme.elevation.modal};

  .modal {
    z-index: ${({ theme }) => theme.elevation.modal};
    border-radius: 10px;
    position: fixed;
    margin: 2rem;
    top: 50%;
    left: 50%;
    outline: none;
    overflow: ${({ noOverflow }) => (noOverflow ? 'hidden' : 'unset')};
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.background};
    margin: 0;
    padding: 0;
    border: 0;
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1), 0 0 0 1px #00000019, 0 2px 4px 0px #00000036;

    .close-dialog-btn {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 99;
      color: ${({ theme }) => theme.color.foreground}40;
      background-color: transparent;

      svg {
        height: 24px;
      }

      &:hover {
        color: ${({ theme }) => theme.color.foreground}60;
      }
    }

    .modal-content {
      max-height: calc(100vh - 40px);
      max-width: calc(100vw - 40px);
      overflow-y: auto;
      display: flex;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000000cc;
  }

  @media (pointer: none), (pointer: coarse) {
    height: 100vh;

    .modal {
      .modal-content {
        max-height: -webkit-fill-available;
      }
    }
  }
`

export default StyledDialog
