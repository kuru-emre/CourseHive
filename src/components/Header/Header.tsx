import { FC } from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useAppSelector } from '../../redux'
import { Avatar } from '..'
import { StyledHeader } from '.'

const Header: FC = () => {
  const { title } = useAppSelector((state) => state.course)

  return (
    <StyledHeader>
      <div className="header-group">
        <ArrowLeftIcon/>
        <div className="course-details">
          <span className="course-title">{title}</span>
          <span className="course-students">123 students</span>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
