import styled from 'styled-components'

const StyledPostListItem = styled.div`
  border-radius: 10px;
  transition: 0.2s;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 1px 2px rgb(0, 0, 0, 0.1);

  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;

    .post-details-container {
      display: flex;
      align-items: center;

      .post-details {
        margin-left: 14px;

        span {
          display: block;
        }
  
        .post-user-name {
          font-weight: 500;
          font-size: 15px;
          color: ${({ theme }) => theme.color.gray[800]};
        }
  
        .post-date {
          font-size: 13px;
          margin-top: 3px;
          color: ${({ theme }) => theme.color.gray[600]};
        }
      }
    }

    .more-btn {
      width: 30px;
      height: 30px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.color.gray[100]};
      color: ${({ theme }) => theme.color.gray[500]};
  
      svg {
        height: 22px;
      }
    }
  }

  .post-content {
    padding: 16px;
    color: ${({ theme }) => theme.color.gray[800]};
    background-color: ${({ theme }) => theme.color.gray[100]};
  }
`

export default StyledPostListItem
