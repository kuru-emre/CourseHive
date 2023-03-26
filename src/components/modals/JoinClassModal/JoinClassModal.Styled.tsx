import styled from 'styled-components'

type StyledProps = {}

const StyledJoinClassModal = styled.div<StyledProps>`
  .modal-header {
    font-weight: 700;
    display: flex;
    align-items: center;
    height: 47px;
    border-bottom: 1px solid #d1d5db;

    .toggle-option {
      width: 100%;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px 5px 0 0;
      color: #1f2937;
      transition: all 0.3s ease-out;
      background-color: #e1e1e1;

      &.active {
        background-color: #fff;

        .toggleIcon {
          color: #fff;
        }
      }
    }
  }

  .modal-body {
    background-color: #f9fafb;
    max-height: calc(100vh * 0.7);
    overflow: hidden auto;
    padding: 30px 16px;
  }

  .modal-footer {
    border-top: 1px solid #d1d5db;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    .cancel-button {
      background-color: #f3f4f6;
      color: #4b5563;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 400;
      user-select: none;
      padding: 10px 16px;

      &:hover {
        background-color: #e5e7eb;
      }
    }

    .action-button {
      background-color: ${({ theme }) => theme.color.gray[800]};
      color: ${({ theme }) => theme.color.background};
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 400;
      user-select: none;
      padding: 10px 16px;

      &:disabled {
        background-color: ${({ theme }) => theme.color.gray[100]};
        color: ${({ theme }) => theme.color.gray[400]};

        &:hover {
          cursor: not-allowed;
          background-color: ${({ theme }) => theme.color.gray[100]};
          color: ${({ theme }) => theme.color.gray[400]};
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.color.gray[700]};
      }
    }
  }
`

export default StyledJoinClassModal
