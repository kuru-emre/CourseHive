import { createRef, FC, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { ArrowRightOnRectangleIcon, PlusIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { JoinClassModal } from '../modals'
import { ROUTES, useUser } from '../../utils'
import { useAppSelector } from '../../redux'
import { Avatar, OptionsPopover, WidthController } from '..'
import { StyledNavbar } from '.'

const Navbar: FC = () => {
  const history = useHistory()
  const optionsBtnRef = createRef<HTMLButtonElement>()
  const { logout } = useUser()
  const { user } = useAppSelector(state => state.user)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

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
              <button className="options-btn" ref={optionsBtnRef} onClick={() => setShowOptions(!showOptions)}>
                <Avatar name={user?.name} />
              </button>
            </div>
          </div>
        </WidthController>
      </StyledNavbar>
      <JoinClassModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <OptionsPopover
        options={[
          {
            icon: <UserCircleIcon />,
            label: 'Edit profile',
            action: () => history.push(ROUTES.App.profile)
          },
          {
            icon: <ArrowRightOnRectangleIcon />,
            label: 'Log out',
            action: () => logout()
          }
        ]}
        divsAfter={['Edit profile']}
        width={150}
        classToAvoid="options-btn"
        buttonRef={optionsBtnRef}
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
      />
    </>
  )
}

export default Navbar
