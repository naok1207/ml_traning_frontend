import styled from 'styled-components'
import { neomorphic, neomorphicSink } from '../../styles/mixin'

export const StyledTextArea = styled.div`
  width: 100%;
  ${neomorphic}
  border-radius: 4px;
  padding: 0;
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
`
