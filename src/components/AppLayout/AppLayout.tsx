import { FC, ReactNode } from 'react'
import { Redirect } from 'react-router-dom'
import { useAppSelector } from '../../redux'
import { ROUTES } from '../../utils'
import { Navbar } from '..'
import { StyledAppLayout } from '.'

type Props = {
  children: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  const { user } = useAppSelector(state => state.user)

  if (!user) {
    return <Redirect to={ROUTES.App.register} />
  }

  return (
    <StyledAppLayout>
      <Navbar />
      {children}
    </StyledAppLayout>
  )
}

export default AppLayout
