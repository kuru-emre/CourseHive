import styled from "styled-components";

const StyledLogin = styled.div`
  .auth-form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
  }

  @media screen and (min-width: 650px) {
    .auth-form-container {
      padding: 5rem;
      border: 1px solid white;
      border-radius: 10px;
      margin: 0.5rem;
    }
  }

  label {
    text-align: left;
    padding: 0.25rem 0;
  }

  input {
    margin: 0.5rem 0;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.color.purple[500]};
    border-radius: 10px;
  }

  button {
    border: none;
    background-color: whites;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    color: #7439db;
  }

  .link-btn {
    background: none;
    color: ${({ theme }) => theme.color.purple[500]};
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
`;

export default StyledLogin;
