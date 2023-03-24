import { FC, useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { useAppSelector } from '../../redux'
import { Avatar } from '../Avatar'
import { JoinClassModal } from '../modals'
import { StyledNavbar } from '.'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils'
import { WidthController } from '../system'

const Navbar: FC = () => {
  const { theme } = useAppSelector(state => state.course)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <StyledNavbar color={theme}>
        <WidthController>
          <div className="header">
            <div className="header-group">
              <Link className="header-logo" to={ROUTES.App.home}>
                <Logo />
              </Link>
              <nav>
                <NavLink to={ROUTES.App.home}>
                  <span>Home</span>
                </NavLink>
                <NavLink to={ROUTES.App.profile}>
                  <span>Profile</span>
                </NavLink>
                <NavLink to={ROUTES.App.settings}>
                  <span>Settings</span>
                </NavLink>
              </nav>
            </div>
            <div className="header-group">
              <button className="join-course-btn" onClick={() => setIsModalOpen(true)}>
                <span>New Course</span>
                <PlusIcon />
              </button>
              <Avatar />
            </div>
          </div>
        </WidthController>
      </StyledNavbar>
      <JoinClassModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar
