import styled from 'styled-components';

type StyledProps = {
  color: string
}

const StyledCourseCard = styled.div<StyledProps>`
  background-color: #f9fafb;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  min-height: 200px;

  a {
    display: block;
    height: 100%;
  }

  .course-details-wrapper {
    border-radius: 6px 6px 0 0;
    background-color: ${({ color }) => color}20;
    border-bottom: 1px solid #d1d5db;
    height: 80px;
    position: relative;

    .course-details {
      display: grid;
      gap: 4px;
      padding: 12px;

      .course-name {
        font-size: 18px;
        font-weight: 700;
        color: ${({ color }) => color};
      }

      .course-count {
        font-size: 14px;
        color: ${({ color }) => color}c4;

      }
    }

    .more-btn {
      width: 30px;
      height: 30px;
      border-radius: 4px;
      color: ${({ theme }) => theme.color.gray[500]};
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255, 255, 255, 0.15);

      svg {
        height: 22px;
      }
    }
  }

  .extra-details {
    margin: 0;
    padding: 12px;

    li {
      list-style-type: none;
      color: #1f2937;
      font-size: 14px;
    }
  }
`

export default StyledCourseCard
