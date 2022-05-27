import React, { forwardRef, InputHTMLAttributes } from 'react'
import { DeepMap, FieldValues, FieldError } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { StyledField } from '../../styles'
import { InputElement, StyledInput, StyledLabel } from './Styles'

interface PropType extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  errors?: DeepMap<FieldValues, FieldError>
}

const Input = forwardRef<HTMLInputElement, PropType>(
  ({ className = '', label, errors = {}, ...inputProps }, ref) => (
    <StyledField>
      {label && <StyledLabel htmlFor={inputProps.name}>{label}</StyledLabel>}
      <StyledInput className={className}>
        <InputElement {...inputProps} ref={ref} />
      </StyledInput>
      <ErrorMessage
        errors={errors}
        name={inputProps.name || ''}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className='error'>{message}</p>
          ))
        }
      />
    </StyledField>
  )
)

export default Input
