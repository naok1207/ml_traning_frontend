import styled from 'styled-components'
import { neomorphic, neomorphicSink } from '../../styles/mixin'

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

export const InputElement = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 10px;
  ${neomorphicSink}
  border: 4px solid transparent;
`
