import React, { forwardRef, InputHTMLAttributes } from 'react'
import { DeepMap, FieldValues, FieldError } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { StyledField } from '../../styles'
import { TextAreaElement, StyledTextArea, StyledLabel } from './Styles'

interface PropType extends InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  errors?: DeepMap<FieldValues, FieldError>
}

const TextArea = forwardRef<HTMLTextAreaElement, PropType>(
  ({ className = '', label, errors = {}, ...textareaProps }, ref) => (
    <StyledField>
      {label && (
        <StyledLabel htmlFor={textareaProps.name || ''}>{label}</StyledLabel>
      )}
      <StyledTextArea className={className}>
        <TextAreaElement {...textareaProps} ref={ref} />
      </StyledTextArea>
      <ErrorMessage
        errors={errors}
        name={textareaProps.name || ''}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />
    </StyledField>
  )
)

export default TextArea
