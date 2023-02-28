import styled from 'styled-components'

const StyledPostListItemDropdown = styled.div`
  display: grid;
  grid-gap: 4px;
  padding: 4px;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 1px 4px rgb(0, 0, 0, 0.1);

  button {
    display: flex;
    align-items: center;
    padding: 4px 6px 4px 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.gray[700]};
    transition: 0.2s;

    svg {
      height: 20px;
      stroke-width: 2px;
      margin-right: 8px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.color.gray[100]};
      color: ${({ theme }) => theme.color.gray[800]};
    }
  }
`

export default StyledPostListItemDropdown
