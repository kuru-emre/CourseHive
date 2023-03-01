import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: sticky;
  top: 0;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color.background};
  z-index: ${({ theme }) => theme.elevation.fixed};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[300]};

  .header-group {
    display: flex;
    align-items: center;

    svg {
      height: 22px;
      stroke-width: 2px;
      color: ${({ theme }) => theme.color.gray[500]};
    }

    .course-details {
      margin-left: 16px;

      span {
        display: block;
      }

      .course-title {
        font-weight: 600;
        font-size: 16px;
        color: ${({ theme }) => theme.color.gray[800]};
      }

      .course-students {
        font-size: 13px;
        margin-top: 3px;
        color: ${({ theme }) => theme.color.gray[600]};
      }
    }
  }
`

export default StyledHeader
