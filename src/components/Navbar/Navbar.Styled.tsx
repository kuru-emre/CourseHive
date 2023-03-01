import styled from 'styled-components'

type StyledProps = {
  color: string
}

const StyledNavbar = styled.nav<StyledProps>`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    background-color: ${({ color }) => color}20;

    .links {
      list-style-type: none;
      margin: 0;
      padding: 5px;
    }

    .links a {
      text-decoration: none;
      font-size: 17px;
      font-weight: 400;
      padding: 10px;
      margin-right: 20px;
      border-radius: 4px;
      background-color: ${({ color }) => color}15;
      transition: 0.2s;

      &:hover {
        background-color: ${({ color }) => color}30;
      }
    }

    .right-section {
      display: flex;
      align-items: center;

      .join-course-btn {
        /* background: #4f46e5;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        padding: 6px;
        border-radius: 50%; */

        background: #4f46e5;
        color: #fff;
        display: flex;
        align-items: center;
        margin-right: 20px;
        padding: 10px;
        border-radius: 5px;

        span {
          position: relative;
          top: -1px;
          margin-right: 6px;
        }

        &:hover {
          background-color: #5952e0;
        }

        svg {
          height: 20px;
        }
      }
    }
  }
`

export default StyledNavbar
