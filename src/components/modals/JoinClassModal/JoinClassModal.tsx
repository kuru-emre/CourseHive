import { FC, useState } from 'react'
import { useCourse } from '../../../utils'

import { Input, Modal, Spinner } from '../../system'
import { StyledJoinClassModal } from './'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

const JoinClassModal: FC<Props> = ({ isOpen, closeModal }) => {
  const [currentView, setCurrentView] = useState<'Join' | 'Create'>('Join')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [courseCode, setCourseCode] = useState('')
  const [courseName, setCourseName] = useState('')
  const { createCourse, joinCourse } = useCourse()

  const handleSubmit = async () => {
    if (currentView === 'Create') {
      setIsSubmitting(true)

      await createCourse(courseName)
    }

    if (currentView === 'Join') {
      setIsSubmitting(true)

      await joinCourse(courseCode)
    }

    setIsSubmitting(false)
    closeModal()
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} maxWidth={'600px'}>
      <StyledJoinClassModal>
        <div className="modal-header">
          <div
            className={`toggle-option ${currentView === 'Join' ? 'active' : ''}`}
            onClick={() => setCurrentView('Join')}
          >
            Join Course
          </div>
          <div
            className={`toggle-option ${currentView === 'Create' ? 'active' : ''}`}
            onClick={() => setCurrentView('Create')}
          >
            Create Course
          </div>
        </div>

        <div className="modal-body">
          {currentView === 'Join' && (
            <div className="join-view">
              <Input
                id="course-code"
                label="Course Code"
                placeholder="Ex. 56aj23"
                onChange={(e) => setCourseCode(e.target.value)}
                autoFocus
              />
            </div>
          )}

          {currentView === 'Create' && (
            <div className="create-view">
              <Input
                id="course-name"
                label="Course Name"
                placeholder="Ex. CSCI 4177"
                onChange={(e) => setCourseName(e.target.value)}
                autoFocus
              />
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={closeModal}>
            Cancel
          </button>

          <button className={`action-button`} onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? <Spinner size={18} /> : 'Confirm'}
          </button>
        </div>
      </StyledJoinClassModal>
    </Modal>
  )
}

export default JoinClassModal
