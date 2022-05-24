import styled from 'styled-components'
import { color } from "../../../shared/styles/color"
import Card from '../../../shared/components/Card'

export const StyledDetail = styled(Card)``

export const Title = styled.p``

export const Description = styled.p``

export const Header = styled.div`
  display: flex;
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
  margin-left: auto;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  display: block;
  background-color: transparent;
  color: ${color.primary};
  appearance: none;
  border: none;
  margin-left: auto;
  cursor: pointer;
`
