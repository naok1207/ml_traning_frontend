import React, { ChangeEvent, forwardRef } from 'react'
import { StyledField } from '../../styles'
import { TextAreaElement, StyledTextArea } from './Styles'

type PropType = {
  className?: string
  label?: string
  name?: string
  placeholder?: string
  onChange?: (event: ChangeEvent) => void
}

const TextArea = forwardRef<HTMLTextAreaElement, PropType>(
  ({ className = '', label, name = '', onChange, placeholder = '' }, ref) => {
    const handleChange = (event: ChangeEvent) => {
      if (!onChange) return
      onChange(event)
    }

    return (
      <StyledField>
        {label && <label htmlFor={name}>{label}</label>}
        <StyledTextArea className={className}>
          <TextAreaElement name={name} onChange={handleChange} placeholder={placeholder} ref={ref} />
        </StyledTextArea>
      </StyledField>
    )
  }
)

export default TextArea
