import styled from "styled-components";

type StyledProps = {
  color: string;
};

const StyledNavbar = styled.nav<StyledProps>`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    widht: 100%;
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

    .spacer {
      flex-grow: 1;
    }
  }

  

  
`;

export default StyledNavbar;
