import styled from 'styled-components'

type StyledProps = {
  color: string
}

const StyledCourseView = styled.div<StyledProps>`
  padding: 20px 0;

  .course-splash {
    margin-bottom: 20px;
    padding: 40px;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.background};
    background-color: ${({ color }) => color};
    background-image: linear-gradient(135deg, ${({ color }) => color} 25%, ${({ color }) => color}70 25%),
      linear-gradient(225deg, ${({ color }) => color} 25%, ${({ color }) => color}99 25%),
      linear-gradient(45deg, ${({ color }) => color} 25%, ${({ color }) => color}99 25%),
      linear-gradient(315deg, ${({ color }) => color} 25%, #e5e5f7 25%);
    background-position: 10px 0, 10px 0, 0 0, 0 0;
    background-size: 20px 20px;
    background-repeat: repeat;

    h1 {
      font-weight: 800;
      font-size: 32px;
    }

    .course-code {
      margin-top: 4px;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      color: rgb(255, 255, 255, 0.8);

      button {
        height: 26px;
        width: 26px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        background-color: rgb(255, 255, 255, 0.2);
        color: rgb(255, 255, 255, 0.9);
        margin-left: 6px;

        svg {
          height: 20px;
          stroke-width: 1.75px;
        }

        &:hover {
          background-color: rgb(255, 255, 255, 0.3);
        }
      }
    }

    .course-actions {
      margin-top: 20px;
      display: flex;
      justify-content: end;
      align-items: center;

      button {
        height: 36px;
        width: 36px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        background-color: rgb(255, 255, 255, 0.2);
        color: rgb(255, 255, 255, 0.9);

        svg {
          height: 26px;
          stroke-width: 1.75px;
        }

        &:hover {
          background-color: rgb(255, 255, 255, 0.3);
        }
      }
    }
  }

  .course-content {
    display: grid;
    gap: 20px;

    .course-post-input {
      margin-bottom: 20px;
    }

    .course-detail-panel {
      background-color: ${({ theme }) => theme.color.gray[100]};
      border-radius: 6px;
      box-sizing: border-box;

      .course-detail-panel-heading {
        padding: 0 16px;
        height: 46px;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.color.gray[600]};
        border-bottom: 1px solid ${({ theme }) => theme.color.gray[300]};

        svg {
          height: 20px;
          margin-right: 6px;
        }
      }

      .course-detail-panel-title {
        font-size: 14px;
        font-weight: 600;
      }

      .course-upcoming-list,
      .course-student-list {
        margin: 0;
        padding: 16px;
        list-style-type: none;
        display: grid;
        gap: 10px;

        li {
          padding: 10px;
          border-radius: 6px;
          background-color: ${({ theme }) => theme.color.background};
          box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 1px 3px rgb(0, 0, 0, 0.1);

          .assignment-title {
            display: block;
            font-weight: 600;
            font-size: 14px;
            color: ${({ theme }) => theme.color.gray[700]};
          }

          .assignment-due-date {
            display: block;
            font-size: 12px;
            margin-top: 3px;
            color: ${({ theme }) => theme.color.gray[500]};
          }
        }
      }

      .empty-state {
        user-select: none;
        padding: 10px 0;

        img {
          pointer-events: none;
          margin: 0 auto 16px auto;
          width: 100px;
          display: block;
        }

        span {
          display: block;
          text-align: center;
          margin: 0 auto;
        }

        .empty-state-title {
          font-weight: 600;
          font-size: 14px;
          color: ${({ theme }) => theme.color.gray[800]};
        }

        .empty-state-body {
          font-size: 12px;
          margin-top: 4px;
          line-height: 18px;
          color: ${({ theme }) => theme.color.gray[500]};
        }
      }

      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }

  @media (min-width: 750px) {
    .course-content {
      grid-template-columns: minmax(0, 1fr) 300px;
    }
  }
`

export default StyledCourseView
