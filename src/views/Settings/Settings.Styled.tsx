import styled from "styled-components";

const StyledSettings = styled.div`
  .container {
    padding: 15px;
    width: 100%;
    display: flex;
  }

  .content {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  h3 {
    color: ${({ theme }) => theme.color.purple[500]}
  }

  input[type=text] {
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.color.purple[500]};
  }

  button {
    margin: 5px;
    padding: 12px 20px;
    border-radius: 10px;
  }

  .action {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledSettings;
