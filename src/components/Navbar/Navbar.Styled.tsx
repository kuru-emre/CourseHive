import styled from 'styled-components'

const StyledNavbar = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.background};
  z-index: ${({ theme }) => theme.elevation.fixed};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.color.gray[900]}30;

  .header {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;

    .header-group {
      display: flex;

      .header-logo {
        color: ${({ theme }) => theme.color.gray[900]};

        svg {
          height: 32px;
        }
      }

      nav {
        display: flex;
        margin-left: 20px;

        a {
          height: 32px;
          display: flex;
          padding: 0 3px;
          justify-content: center;
          align-items: center;
          position: relative;
          font-size: 15px;

          span {
            border-radius: 4px;
            padding: 8px;
            transition: 0.2s;
            color: ${({ theme }) => theme.color.gray[500]};
          }

          &:hover {
            span {
              background-color: ${({ theme }) => theme.color.gray[100]};
              color: ${({ theme }) => theme.color.gray[600]};
            }
          }

          &.active {
            span {
              color: ${({ theme }) => theme.color.gray[900]};
              background-color: ${({ theme }) => theme.color.gray[200]};
            }
          }
        }
      }

      button {
        display: flex;
        align-items: center;
        padding: 0 12px 0 16px;
        border-radius: 4px;
        font-size: 15px;
        margin-right: 10px;
        transition: 0.2s;
        background-color: ${({ theme }) => theme.color.gray[800]};
        color: ${({ theme }) => theme.color.background};

        svg {
          height: 22px;
          stroke-width: 2px;
          margin-left: 10px;
        }

        &:hover {
          background-color: ${({ theme }) => theme.color.gray[700]};
        }
      }
    }
  }
`

export default StyledNavbar
