import styled from 'styled-components'
import { color } from '../../../shared/styles/color'

export const StyledAuthHeader = styled.div`
  position: absolute;
  height: 72px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 32px;
`

export const Logo = styled.div`
  color: ${color.primary};
`

export const Links = styled.ul`
  display: flex;

  a {
    color: ${color.primary};
  }
  a + a {
    margin-left: 10px;
  }
`
