import styled from 'styled-components'

type StyledProps = {}

const StyledHomeView = styled.div<StyledProps>`
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
`

export default StyledHomeView
