import styled from 'styled-components'

type StyledProps = {
  color: string
}

const StyledShareInput = styled.label<StyledProps>`
  border-radius: 6px;
  padding: 10px;
  display: flex;
  transition: 0.2s;
  box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1), 0 1px 2px rgb(0, 0, 0, 0.1);

  textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 14px;
    resize: none;
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray[400]};
    }
  }

  button {
    height: 38px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-color: ${({ color }) => color}20;
    color: ${({ color }) => color};
  }

  .type-select-btn {
    padding: 0 10px 0 12px;
    justify-content: space-between;
    margin-right: 8px;
    font-size: 15px;
    transition: 0.2s;

    svg {
      height: 16px;
      stroke-width: 2.8px;
      margin-left: 6px;
    }

    &:hover,
    &[data-expanded='true'] {
      background-color: ${({ color }) => color}30;
    }
  }

  .date-btn {
    width: 38px;
    margin-right: 8px;
    position: relative;
    overflow: hidden;

    svg {
      height: 22px;
      stroke-width: 2px;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      cursor: pointer;

      ::-webkit-calendar-picker-indicator {
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      ::-webkit-datetime-edit-fields-wrapper,
      ::-webkit-inner-spin-button,
      ::-webkit-datetime-edit,
      ::-webkit-datetime-edit-text,
      ::-webkit-datetime-edit-month-field,
      ::-webkit-datetime-edit-day-field,
      ::-webkit-datetime-edit-year-field {
        display: none;
      }
    }

    &:hover {
      background-color: ${({ color }) => color}30;
    }
  }

  .send-btn {
    width: 38px;
    background-color: ${({ color }) => color};
    color: ${({ theme }) => theme.color.background};

    svg {
      height: 22px;
      stroke-width: 2px;
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
`

export default StyledShareInput
