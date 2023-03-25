import { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { createPortal } from 'react-dom'
import { StyledPopover } from '.'

type Props = {
  children: ReactNode
  classToAvoid: string
  buttonRef: RefObject<HTMLDivElement | HTMLButtonElement>
  position: 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'top-right'
  isOpen: boolean
  onClose: () => void
}

const Popover: FC<Props> = ({ children, classToAvoid, buttonRef, position, isOpen, onClose }) => {
  const [showCloseAnim, setShowCloseAnim] = useState(false)
  const popoverId = useRef(uuidv4())
  const CLOSE_ANIM_LENGTH = 50
  const POPOVER_OFFSET = 12

  const handleClose = (e?: Event) => {
    const target = e?.target as HTMLElement
    const isSameParent = buttonRef.current?.parentElement?.contains(target)

    if (!!isSameParent && !!target?.closest(`.${classToAvoid}`)) {
      return
    }

    setShowCloseAnim(true)
    setTimeout(() => onClose(), CLOSE_ANIM_LENGTH)
  }

  const handleScroll = throttle((e?: Event) => {
    const target = e?.target as HTMLElement

    if (typeof target?.closest !== 'function') {
      handleClose()
      return
    }

    if (!!target?.closest(`[data-popover="${popoverId.current}"]`)) {
      return
    }

    handleClose()
  }, 100)

  const popoverRef = useDetectClickOutside({
    onTriggered: e => handleClose(e)
  }) as RefObject<HTMLDivElement>

  useEffect(() => {
    setShowCloseAnim(false)
  }, [isOpen])

  useEffect(() => {
    const button = buttonRef.current
    const popover = popoverRef.current

    if (!button || !popover) {
      return
    }

    if (position === 'bottom-right') {
      const buttonTop = button.getBoundingClientRect().top
      const buttonHeight = button.getBoundingClientRect().height
      const buttonLeft = button.getBoundingClientRect().left
      const buttonWidth = button.getBoundingClientRect().width

      const popoverWidth = popover.clientWidth

      popover.style.top = `${buttonTop + buttonHeight + POPOVER_OFFSET}px`
      popover.style.left = `${buttonLeft + buttonWidth - popoverWidth}px`
    }

    if (position === 'bottom-left') {
      const buttonTop = button.getBoundingClientRect().top
      const buttonHeight = button.getBoundingClientRect().height
      const buttonLeft = button.getBoundingClientRect().left

      popover.style.top = `${buttonTop + buttonHeight + POPOVER_OFFSET}px`
      popover.style.left = `${buttonLeft}px`
    }

    if (position === 'top-right') {
      const bottonTop = button.getBoundingClientRect().top
      const buttonLeft = button.getBoundingClientRect().left
      const buttonWidth = button.getBoundingClientRect().width

      const popoverWidth = popover.clientWidth
      const popoverHeight = popover.clientHeight

      popover.style.top = `${bottonTop - popoverHeight - POPOVER_OFFSET}px`
      popover.style.left = `${buttonLeft + buttonWidth - popoverWidth}px`
    }

    if (position === 'top-left') {
      const bottonTop = button.getBoundingClientRect().top
      const buttonLeft = button.getBoundingClientRect().left
      const popoverHeight = popover.clientHeight

      popover.style.top = `${bottonTop - popoverHeight - POPOVER_OFFSET}px`
      popover.style.left = `${buttonLeft}px`
    }

    if (position === 'top-center') {
      const bottonTop = button.offsetTop
      const buttonLeft = button.getBoundingClientRect().left
      const popoverHeight = popover.clientHeight

      popover.style.top = `${bottonTop - popoverHeight - POPOVER_OFFSET}px`
      popover.style.left = `${buttonLeft}px`
    }
  }, [buttonRef, popoverRef])

  useEffect(() => {
    document.addEventListener('scroll', e => handleScroll(e), true)

    return () => {
      document.removeEventListener('scroll', e => handleScroll(e), true)
    }
  }, [])

  if (!isOpen) {
    return <></>
  }

  const Element = (
    <StyledPopover data-popover={popoverId.current} showCloseAnim={showCloseAnim} ref={popoverRef}>
      {children}
    </StyledPopover>
  )

  return createPortal(Element, document.getElementById('overlay-root') as HTMLElement)
}

export default Popover
