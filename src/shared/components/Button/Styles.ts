import styled from 'styled-components'

export const StyledButton = styled.button`
  height: 32px;
  background: linear-gradient(125deg, #fece03 100%, #ebbf02 100%);
  border-radius: 4px;
  color: #000000;
  white-space: nowrap;
  transition: all 0.1s;
  appearance: none;
  padding: 0 12px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &:hover {
    opacity: 0.7;
  }
`
