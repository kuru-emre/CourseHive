import styled from 'styled-components'

const StyledCard = styled.div`
  .card {
    display: flex;
    min-height: auto;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    align-items: center;
    border-radius: 10px;

    img {
      padding: 5px;
      border: 1px solid black;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
    }


    .submit-btn {
      background: black;
      color: white;
      display: none;
    }

    .active-btn {
      display: block;
    }

    .active-text {
      border: 1px dashed black;
    }

    .text {
      border-radius: 18px;
      width: 100%;
      text-align: center;
      background: transparent;
      color: white;
      resize: none;
      overflow: hidden;
      margin: auto;
    }

    .red {
      background: red;
    }

    .actions {
      display: flex;

    }
  }
`

export default StyledCard
