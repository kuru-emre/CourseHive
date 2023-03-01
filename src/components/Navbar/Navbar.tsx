import { FC, useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useAppSelector } from '../../redux'
import { Avatar } from '../Avatar'
import { JoinClassModal } from '../modals'
import { StyledNavbar } from './'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  const { theme } = useAppSelector((state) => state.course)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <StyledNavbar color={theme}>
      <div className="container">
        <div className="links">
          <Link to={'/'}>Homepage</Link>
          <Link to={'/courses'}>Courses</Link>
          <Link to={'/settings'}>Settings</Link>
          <Link to={'/profile'}>Profile</Link>
        </div>
        <div className="right-section">
          <button className="join-course-btn" onClick={() => setIsModalOpen(true)}>
            <span>New Course</span>
            <PlusIcon />
          </button>
          <div className="links">
            <Link to={'/login'}>Login</Link>
          </div>
          <Avatar />
        </div>
      </div>
      <JoinClassModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </StyledNavbar>
  )
}

export default Navbar
