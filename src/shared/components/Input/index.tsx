import React, { ChangeEvent, forwardRef } from 'react'
import { StyledField } from '../../styles'
import { InputElement, StyledInput } from './Styles'

type PropType = {
  className?: string
  label?: string
  name?: string
  placeholder?: string
  onChange?: (event: ChangeEvent) => void
}

const Input = forwardRef<HTMLInputElement, PropType>(
  ({ className = '', label, name = '', onChange, placeholder = '' }, ref) => {
    const handleChange = (event: ChangeEvent) => {
      if (!onChange) return
      onChange(event)
    }

    return (
      <StyledField>
        {label && <label htmlFor={name}>{label}</label>}
        <StyledInput className={className}>
          <InputElement name={name} onChange={handleChange} placeholder={placeholder} ref={ref} />
        </StyledInput>
      </StyledField>
    )
  }
)

export default Input
