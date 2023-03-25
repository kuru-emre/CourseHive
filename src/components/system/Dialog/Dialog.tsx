import { useEffect, ReactNode, createRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { StyledDialog } from '.'

type Props = {
  children: ReactNode
  noOverflow?: boolean
  isOpen?: boolean
  onClose: () => void
}

const Dialog = forwardRef<HTMLDivElement, Props>(({ children, noOverflow = true, isOpen = false, onClose }, ref) => {
  const modalRef = createRef<HTMLDivElement>()

  useEffect(() => {
    const modal = modalRef.current

    if (!!modal && isOpen) {
      modal.focus()
      return disablePageScroll(modal)
    }

    enablePageScroll()
  }, [modalRef.current, isOpen])

  // Ensures the user can always scroll when the modal is hidden
  useEffect(() => {
    return () => {
      enablePageScroll()
    }
  }, [])

  let Element = (
    <StyledDialog ref={ref} noOverflow={noOverflow} isOpen={isOpen}>
      <dialog open className="modal">
        <div ref={modalRef} className="modal-content">
          {children}
        </div>
      </dialog>
      <div tabIndex={-1} className="backdrop" onClick={() => onClose()} />
    </StyledDialog>
  )

  if (!isOpen) {
    return null
  }

  // Render the modal outside of the DOM hierarchy of the parent component
  return createPortal(Element, document.getElementById('overlay-root') as HTMLElement)
})

export default Dialog
