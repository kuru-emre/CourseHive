import styled from 'styled-components'

type StyledProps = {
  color: string
}

const StyledCourseCard = styled.div<StyledProps>`
  background-color: ${({ theme }) => theme.color.background};
  overflow: hidden;
  border-radius: 12px;
  min-height: 200px;
  position: relative;
  transition: 0.2s;
  box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 2px 6px rgb(0, 0, 0, 0.1);

  a {
    display: block;
    height: 100%;
  }

  .course-details-wrapper {
    background-color: ${({ color }) => color};
    color: ${({ theme }) => theme.color.background};
    height: 80px;
    position: relative;

    .course-details {
      display: grid;
      gap: 4px;
      padding: 20px;

      .course-name {
        font-size: 18px;
        font-weight: 600;
      }

      .course-count {
        font-size: 14px;
        color: ${({ theme }) => theme.color.background}90;
      }
    }

    .more-btn {
      width: 30px;
      height: 30px;
      border-radius: 4px;
      color: ${({ theme }) => theme.color.background}80;
      position: absolute;
      top: 12px;
      right: 12px;
      background: transparent;

      svg {
        height: 22px;
      }
    }
  }

  .extra-details {
    margin: 0;
    padding: 20px;
    display: grid;
    gap: 10px;

    li {
      list-style-type: none;
      color: #1f2937;
      font-size: 14px;

      span {
        display: block;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-align: left;
        -webkit-box-orient: vertical;
      }
    }
  }

  &:hover {
    box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.15), 0 4px 12px rgb(0, 0, 0, 0.15);
  }
`

export default StyledCourseCard
