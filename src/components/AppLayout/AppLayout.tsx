import { FC, ReactNode } from 'react'
import { Navbar } from '..'
import { StyledAppLayout } from '.'

type Props = {
  children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <StyledAppLayout>
      <Navbar />
      {children}
    </StyledAppLayout>
  )
}

export default AppLayout
