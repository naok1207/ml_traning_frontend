import styled from 'styled-components'

export const StyledButton = styled.button`
  height: 32px;
  background: linear-gradient(125deg, #FECE03 100%, #EBBF02 100%);
  border-radius: 4px;
  color: #000000;
  white-space: nowrap;
  transition: all 0.1s;
  appearance: none;
  padding: 0 12px;
  border: none;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`
