import styled from 'styled-components'
import { color } from '../../shared/styles/color'

export const StyledProjectHeader = styled.div`
  height: 72px;
  width: 100%;
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
