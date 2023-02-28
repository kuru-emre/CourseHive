import styled from 'styled-components'

type StyledProps = {
  color: string
}

const StyledCoursePageView = styled.div<StyledProps>`
  .width-controller {
    max-width: 650px;
    margin: 0 auto;
    padding: 20px;

    .course-splash {
      border-radius: 10px;
      padding: 40px;
      background-color: ${({ color }) => color}20;

      .course-splash-heading {
        margin-bottom: 40px;

        h1 {
          font-weight: 600;
          font-size: 30px;
          color: ${({ color }) => color};
        }

        h2 {
          font-size: 16px;
          margin-top: 12px;
          font-weight: 500;
          color: ${({ color }) => color}c4;
        }
      }

      .course-splash-change-theme-btn {
        font-size: 16px;
        font-weight: 400;
        padding: 6px;
        margin: -6px;
        border-radius: 4px;
        background-color: transparent;
        transition: 0.2s;
        color: ${({ color }) => color}c4;

        &:hover {
          background-color: ${({ color }) => color}15;
        }
      }
    }
  }

  .post-list {
    display: grid;
    grid-gap: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.s}px) {
    .width-controller {
      padding: 40px;
    }
  }
`

export default StyledCoursePageView
