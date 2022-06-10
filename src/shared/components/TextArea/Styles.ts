import styled from 'styled-components'
import { labelStyle, neomorphic, neomorphicSink } from '../../styles/mixin'

export const StyledTextArea = styled.div`
  width: 100%;
  ${neomorphic}
  border-radius: 4px;
  padding: 0;
`

export const StyledLabel = styled.label`
  ${labelStyle}
`

export const TextAreaElement = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 10px;
  ${neomorphicSink}
  border: 4px solid transparent;
  border-bottom: none;
  resize: none;
  font-size: 12px;
  letter-spacing: 0.01rem;
`
