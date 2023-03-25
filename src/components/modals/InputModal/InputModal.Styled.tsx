import styled from 'styled-components'

const StyledInputModal = styled.div`
  width: 100vw;
  padding: 28px;
  box-sizing: border-box;

  input {
    height: 42px;
    padding: 0 10px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.gray[800]};
    border: 1px solid ${({ theme }) => theme.color.gray[300]};
    width: 100%;
    box-sizing: border-box;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray[400]};
    }
  }

  .modal-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    button {
      height: 42px;
      border-radius: 4px;
      padding: 0 14px;
      transition: 0.2s;
      background-color: ${({ theme }) => theme.color.gray[100]};
      color: ${({ theme }) => theme.color.gray[600]};

      &:hover {
        background-color: ${({ theme }) => theme.color.gray[200]};
      }

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.submit-btn {
        background-color: ${({ theme }) => theme.color.gray[800]};
        color: ${({ theme }) => theme.color.background};

        &:hover {
          background-color: ${({ theme }) => theme.color.gray[700]};
        }
      }

      &:disabled {
        background-color: ${({ theme }) => theme.color.gray[100]};
        color: ${({ theme }) => theme.color.gray[400]};

        &:hover {
          cursor: not-allowed;
          background-color: ${({ theme }) => theme.color.gray[100]};
          color: ${({ theme }) => theme.color.gray[400]};
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.s}px) {
    max-width: 375px;
  }
`

export default StyledInputModal
