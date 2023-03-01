import styled from "styled-components";

const StyledCard = styled.div`
  .card {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2px;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.purple[50]};
    border: 4px solid ${({ theme }) => theme.color.purple[100]};

    h3,
    h5 {
      width: 100%;
      text-align: center;
      color: ${({ theme }) => theme.color.purple[700]};
    }

    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      text-align: center;
      margin-bottom: 20px;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      text-align: center;
    }
  }
`;

export default StyledCard;
