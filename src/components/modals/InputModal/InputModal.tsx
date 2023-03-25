import { FC, FormEvent, useEffect, useState } from 'react'
import { Dialog } from '../..'
import { StyledInputModal } from '.'

type Props = {
  confirmButtonText: string
  defaultValue?: string
  isOpen: boolean
  onClose: () => void
  onConfirm: (value: string) => void
}

const InputModal: FC<Props> = ({ confirmButtonText, defaultValue = '', isOpen, onClose, onConfirm }) => {
  const [value, setValue] = useState(defaultValue)

  const handleConfirm = (e: FormEvent) => {
    e.preventDefault()
    onConfirm(value)
    onClose()
  }

  useEffect(() => {
    setValue(defaultValue)
  }, [isOpen])

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <StyledInputModal>
        <form onSubmit={e => handleConfirm(e)}>
          <input value={value} maxLength={120} required autoFocus onChange={e => setValue(e.target.value)} />
          <div className="modal-actions">
            <button type="button" onClick={() => onClose()}>
              Cancel
            </button>
            <button className="submit-btn" disabled={!value.trim().length}>
              {confirmButtonText}
            </button>
          </div>
        </form>
      </StyledInputModal>
    </Dialog>
  )
}

export default InputModal
