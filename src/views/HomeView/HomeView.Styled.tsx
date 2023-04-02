import styled from 'styled-components'

type StyledProps = {}

const StyledHomeView = styled.div<StyledProps>`
  padding-bottom: 20px;

  .splash-container {
    background: linear-gradient(#02081a20, #02081a10), url('/backdrop.png');
    background-size: cover;
    background-position: top right;

    .splash {
      padding: 60px 0 140px 0;
      color: white;
      text-shadow: 0px 2px 6px #00000020;

      h1 {
        font-weight: 600;
        font-size: 32px;
      }

      p {
        margin-top: 10px;
        font-size: 18px;
      }
    }
  }

  .course-list {
    margin-top: -80px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
`

export default StyledHomeView
