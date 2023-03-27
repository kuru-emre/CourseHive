import styled from 'styled-components'

type StyledProps = {
  color?: string
}

const StyledInviteView = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 62px);
  background: linear-gradient(rgba(26, 26, 26, 0.922), rgba(2, 8, 26, 0.963)), url('/backdrop.png');
  background-size: cover;
  background-position: top right;

  .invite-container {
    background-color: ${({ theme }) => theme.color.background};
    overflow: hidden;
    border-radius: 10px;
    transition: 0.2s;
    box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 2px 6px rgb(0, 0, 0, 0.1);
    max-width: 350px;
    width: 100%;

    .theme-banner {
      height: 80px;
      color: ${({ theme }) => theme.color.background};
      background-color: ${({ color }) => color};
      background-image: linear-gradient(135deg, ${({ color }) => color} 25%, ${({ color }) => color}70 25%),
        linear-gradient(225deg, ${({ color }) => color} 25%, ${({ color }) => color}99 25%),
        linear-gradient(45deg, ${({ color }) => color} 25%, ${({ color }) => color}99 25%),
        linear-gradient(315deg, ${({ color }) => color} 25%, #e5e5f7 25%);
      background-position: 10px 0, 10px 0, 0 0, 0 0;
      background-size: 20px 20px;
      background-repeat: repeat;
    }

    .invite-body {
      padding: 30px;
      display: grid;
      gap: 30px;

      .course-details {
        .course-name {
          font-size: 20px;
          color: ${({ theme }) => theme.color.gray[800]};
        }

        .course-count {
          font-size: 14px;
          font-weight: 600;
          color: #606060;
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

        span {
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            height: 20px;
            margin-left: 8px;
            position: relative;
            top: 1px;
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

        &:hover {
          background-color: ${({ theme }) => theme.color.gray[700]};
        }
      }
    }
  }
`

export default StyledInviteView
