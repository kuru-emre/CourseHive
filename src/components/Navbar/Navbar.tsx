import { FC, useState } from 'react'

import { PlusIcon } from '@heroicons/react/24/outline'
import Tippy from '@tippyjs/react'

import { useAppSelector } from '../../redux'
import { Avatar } from '../Avatar'
import { JoinClassModal } from '../modals'
import { StyledNavbar } from './'

const Navbar: FC = () => {
  const { theme } = useAppSelector((state) => state.course)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <StyledNavbar color={theme}>
      <div className="container">
        <div className="links">
          <a href="/">Homepage</a>
          <a href="/courses">Courses</a>
          <a href="/settings">Settings</a>
        </div>

        <div className="right-section">
          <button className="join-course-btn" onClick={() => setIsModalOpen(true)}>
            <span>New Course</span>
            <PlusIcon />
          </button>
          <div className="links">
            <a href="/login">Login</a>
          </div>
          <Avatar />
        </div>
      </div>

      <JoinClassModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </StyledNavbar>
  )
}

export default Navbar
