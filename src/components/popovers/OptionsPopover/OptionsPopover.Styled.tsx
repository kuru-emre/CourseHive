import styled from 'styled-components'

type StyledProps = {
  height?: number
  width?: number
}

const StyledOptionsPopover = styled.div<StyledProps>`
  width: ${({ width }) => width}px;
  box-sizing: border-box;
  max-height: ${({ height }) => height}px;
  overflow-y: auto;

  .search-bar {
    padding: 4px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray[300]};
  }

  .empty-state {
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.color.gray[600]};
  }

  .menu-group {
    display: grid;
    grid-gap: 12px;
    padding: 12px;

    .options-label {
      font-size: 13px;
      font-weight: 500;
      color: ${({ theme }) => theme.color.gray[600]};
      margin-bottom: -2px;
      user-select: none;
    }

    a,
    button {
      border-radius: 6px;
      display: flex;
      align-items: center;
      text-decoration: none;
      background-color: transparent;
      transition: background-color 0.2s, color 0.2s;
      color: ${({ theme }) => theme.color.gray[700]};
      padding: 0 6px;
      height: 32px;
      margin: -6px;
      font-size: 15px;
      position: relative;

      .new-flag {
        padding: 3px 6px;
        margin-left: 6px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05rem;
        border-radius: 50rem;
        color: ${({ theme }) => theme.color.background};
        background-color: ${({ theme }) => theme.color.brand};
      }

      svg,
      img {
        color: ${({ theme }) => theme.color.gray[600]};
        margin-right: 10px;
        height: 20px;
        stroke-width: 1.7px;
        transition: color 0.2s;
      }

      i {
        margin-right: 10px;
        display: flex;

        img {
          height: 18px !important;
          width: 18px !important;
        }
      }

      .selected-icon {
        position: absolute;
        margin: 0;
        right: 6px;
      }

      &:hover {
        color: ${({ theme }) => theme.color.gray[900]};
        background-color: ${({ theme }) => theme.color.gray[100]};

        svg {
          color: ${({ theme }) => theme.color.gray[900]};
        }
      }

      &.active {
        color: ${({ theme }) => theme.color.brand};
        background-color: ${({ theme }) => theme.color.brand};

        svg {
          color: ${({ theme }) => theme.color.brand};
        }
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.gray[300]};
    }

    hr {
      background-color: ${({ theme }) => theme.color.gray[300]};
      width: calc(100% + 24px);
      height: 1px;
      border: 0;
      margin: 0 0 0 -12px;
    }
  }

  .color-option {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.foreground}20, 0 1px rgb(0, 0, 0, 0.1);
    }
  }
`

export default StyledOptionsPopover
