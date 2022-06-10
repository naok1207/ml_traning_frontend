import styled from 'styled-components'
import { labelStyle, neomorphic, neomorphicSink } from '../../styles/mixin'

export const StyledInput = styled.div`
  width: 100%;
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.005) -12%,
    rgba(255, 255, 255, 0.025) 114%
  );
  ${neomorphic}
  border-radius: 4px;
`

export const StyledLabel = styled.label`
  ${labelStyle}
`

export const InputElement = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 10px;
  ${neomorphicSink}
  border: 4px solid transparent;
  font-size: 12px;
  letter-spacing: 0.01rem;
`
