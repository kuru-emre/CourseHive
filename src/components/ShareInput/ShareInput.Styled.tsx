import styled from 'styled-components'

type StyledProps = {
  color: string
}

const StyledShareInput = styled.label<StyledProps>`
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  transition: 0.2s;
  box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 1px 2px rgb(0, 0, 0, 0.1);

  input {
    width: 100%;
    padding: 0 14px;
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray[400]};
    }
  }

  .send-btn {
    width: 46px;
    border-radius: 4px;
    background-color: ${({ color }) => color}20;
    color: ${({ color }) => color};

    svg {
      height: 22px;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.gray[100]};
      color: ${({ theme }) => theme.color.gray[500]};
      cursor: not-allowed;
    }
  }

  &:focus-within {
    box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 3px 6px rgb(0, 0, 0, 0.1);
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.s}px) {
    margin: 40px 0;
  }
`

export default StyledShareInput
