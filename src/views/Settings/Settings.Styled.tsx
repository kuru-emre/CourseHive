import styled from 'styled-components'

const StyledSettings = styled.div`
  .container {
    padding: 15px;
    width: 100%;
    display: flex;
  }

  .courses {
    display: flex;
    flex-direction: column;
    gap: 5%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: ${({ theme }) => theme.color.purple[500]};
  }

  input[type='text'] {
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

  .swiper {
    width: 300px;
    height: 650px;
  }

  @media screen and (min-width: 640px) {
    .swiper {
      width: 400px;
      height: 650px;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper {
      width: 500px;
      height: 650px;
    }
  }

  .swiper-slide {
    border-radius: 18px;
    font-size: 22px;
    color: #fff;
    border: 2px solid black;
    overflow: auto;
  }

  .active {
    border: 2px dashed black;
  }
`

export default StyledSettings
