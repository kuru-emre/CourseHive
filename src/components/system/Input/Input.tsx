import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react'

import { StyledInput } from './'

type Props = {
  value?: string | number
  id: string
  label?: string
  isTextarea?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<Props> = ({ value, id, label, isTextarea, ...rest }) => {
  return (
    <StyledInput {...rest}>
      {label && <label htmlFor={id}>{label}</label>}

      {isTextarea && (
        <div className="textarea-wrapper">
          <textarea id={id} lang="en" {...(rest as any)} />
        </div>
      )}

      {!isTextarea && (
        <div className="input-wrapper">
          <input id={id} lang="en" {...rest} />
        </div>
      )}
    </StyledInput>
  )
}

export default Input
