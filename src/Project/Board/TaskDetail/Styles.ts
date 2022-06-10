import styled from 'styled-components'
import { color } from '../../../shared/styles/color'
import Card from '../../../shared/components/Card'

export const StyledDetail = styled(Card)``

export const Title = styled.p`
  font-size: 20px;
`

export const Description = styled.p`
  font-size: 16px;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  button,
  p {
    font-size: 8px;
  }
`

export const ToggleLabel = styled.p`
  display: block;
`

export const ToggleButton = styled.button`
  display: block;
  background-color: transparent;
  color: ${color.primary};
  appearance: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

export const DeleteButton = styled.button`
  display: block;
  background-color: transparent;
  color: ${color.primary};
  appearance: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
