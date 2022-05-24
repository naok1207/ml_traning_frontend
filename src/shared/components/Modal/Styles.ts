import styled from 'styled-components'

export const StyledModal = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  display: block;
  background-color: transparent;
  appearance: none;
  border: none;
  cursor: pointer;
`
