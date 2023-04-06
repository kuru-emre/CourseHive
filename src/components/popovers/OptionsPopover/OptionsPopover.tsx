import { FC, ReactNode, RefObject } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Popover } from '../..'
import { StyledOptionsPopover } from '.'
import React from 'react'

type Props = {
  position?: 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'top-right'
  options: {
    icon?: ReactNode
    label: string
    render?: ReactNode
    isSelected?: boolean
    stayOpen?: boolean
    action: () => void
  }[]
  height?: number
  width?: number
  divsAfter?: string[]
  labelsBefore?: {
    label: string
    before: string
  }[]
  classToAvoid: string
  buttonRef: RefObject<HTMLDivElement | HTMLButtonElement>
  isOpen: boolean
  onClose: () => void
}

const OptionsPopover: FC<Props> = ({
  position = 'bottom-right',
  options,
  height = 450,
  width = 200,
  divsAfter,
  labelsBefore,
  isOpen,
  onClose,
  ...rest
}) => {
  const handleAction = (option: Props['options'][number]) => {
    option.action()

    if (!option.stayOpen) {
      onClose()
    }
  }

  return (
    <Popover position={position} isOpen={isOpen} onClose={() => onClose()} {...rest}>
      <StyledOptionsPopover height={height} width={width}>
        <div className="menu-group">
          {options.map((option, index) => {
            return (
              <React.Fragment key={option.label}>
                {labelsBefore?.find(l => l.before === option.label) && (
                  <span className="options-label" key={`${index}-label`}>
                    {labelsBefore?.find(l => l.before === option.label)?.label}
                  </span>
                )}
                <button
                  aria-label={option.label}
                  aria-selected={option.isSelected}
                  onClick={() => handleAction(option)}
                  key={index}
                >
                  {option.icon}
                  {option.render || option.label}
                  {option.isSelected && <CheckIcon className="selected-icon" />}
                </button>
                {divsAfter?.includes(option.label) && <hr key={`${index}-divider`} />}
              </React.Fragment>
            )
          })}
        </div>
      </StyledOptionsPopover>
    </Popover>
  )
}

export default OptionsPopover
