import React from 'react'
import { Link } from 'react-router-dom'
import { linkPath } from '../../../shared/utils/linkPath'
import { Links, Logo, StyledAuthHeader } from './Styles'

const Header = () => (
  <StyledAuthHeader>
    <Logo>Task App</Logo>
    <Links>
      <Link to={linkPath.signin}>Sign In</Link>
      <Link to={linkPath.signup}>Sign Up</Link>
    </Links>
  </StyledAuthHeader>
)

export default Header
