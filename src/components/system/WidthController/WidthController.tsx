import { FC, ReactNode } from 'react'
import { StyledWidthController } from '.'

type Props = {
  children: ReactNode
}

const WidthController: FC<Props> = ({ children }) => {
  return <StyledWidthController>{children}</StyledWidthController>
}

export default WidthController
