import React from 'react'
import { Link } from 'react-router-dom'
import { linkPath } from '../../shared/utils/linkPath'
import { Links, Logo, StyledProjectHeader } from './Styles'

const Header = () => (
  <StyledProjectHeader>
    <Logo>Task App</Logo>
    <Links>
      <Link to={linkPath.signout}>Sign Out</Link>
    </Links>
  </StyledProjectHeader>
)

export default Header
