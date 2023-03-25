import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/outline'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { JoinClassModal } from '../modals'
import { ROUTES } from '../../utils'
import { Avatar, WidthController } from '..'
import { StyledNavbar } from '.'

const Navbar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <StyledNavbar>
        <WidthController>
          <div className="header">
            <div className="header-group">
              <Link className="header-logo" to={ROUTES.App.home}>
                <Logo />
              </Link>
              <nav>
                <NavLink to={ROUTES.App.home} exact>
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
