import { FC } from 'react'
import { StyledPlaceholder } from '.'

const Placeholder: FC = () => {
  return (
    <StyledPlaceholder>
      <div className="placeholder-content">
        <h1>This page is a placeholder</h1>
        <h2>This route should be linked to a view</h2>
      </div>
    </StyledPlaceholder>
  )
}

export default Placeholder
