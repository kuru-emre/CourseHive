import { FC, useState } from 'react'

import { Input, Modal, Spinner } from '../../system'
import { StyledJoinClassModal } from './'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

const JoinClassModal: FC<Props> = ({ isOpen, closeModal }) => {
  const [currentView, setCurrentView] = useState<'Join' | 'Create'>('Join')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal} maxWidth={'600px'}>
      <StyledJoinClassModal>
        <div className="modal-header">
          <div
            className={`toggle-option ${currentView === 'Join' ? 'active' : ''}`}
            onClick={() => setCurrentView('Join')}
          >
            Join Class
          </div>
          <div
            className={`toggle-option ${currentView === 'Create' ? 'active' : ''}`}
            onClick={() => setCurrentView('Create')}
          >
            Create Class
          </div>
        </div>

        <div className="modal-body">
          {currentView === 'Join' && (
            <div className="join-view">
              <Input id="class-code" label="Class Code" placeholder="Ex. 56aj23" />
            </div>
          )}

          {currentView === 'Create' && (
            <div className="create-view">
              <Input id="class-name" label="Class Name" placeholder="Ex. CSCI 4177" />
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
