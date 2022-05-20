import styled from 'styled-components'

export const StyledScreen = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  padding: 32px 0;
`

export const ScreenContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
`

export const ScreenHeader = styled.div`
  height: 40px;
  width: 100%;
  margin-bottom: 32px;
`

export const CloseButton = styled.button`
  display: block;
  background-color: transparent;
  appearance: none;
  border: none;
  margin-left: auto;
  cursor: pointer;
`
