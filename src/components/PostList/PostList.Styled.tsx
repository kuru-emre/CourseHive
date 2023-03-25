import styled from 'styled-components'

const StyledPostList = styled.div`
  .empty-state {
    border-radius: 10px;
    padding: 0 26px 30px 26px;
    user-select: none;
    background-color: ${({ theme }) => theme.color.gray[50]};
    border: 1px dashed ${({ theme }) => theme.color.gray[200]};

    img {
      pointer-events: none;
      margin: 0 auto 10px auto;
      width: 200px;
      display: block;
    }

    span {
      display: block;
      text-align: center;
      margin: 0 auto;
    }

    .empty-state-title {
      font-weight: 600;
      font-size: 20px;
      color: ${({ theme }) => theme.color.gray[800]};
    }

    .empty-state-body {
      font-size: 14px;
      margin-top: 12px;
      max-width: 200px;
      line-height: 18px;
      color: ${({ theme }) => theme.color.gray[500]};
    }
  }

  .post-list {
    display: grid;
    gap: 20px;
  }
`

export default StyledPostList
