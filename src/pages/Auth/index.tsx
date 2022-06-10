import React from 'react'
import { Outlet } from 'react-router-dom'
import { useCurrentUserQuery } from '../../graphql/graphql'
import Header from './Header'
import { StyledAuth } from './Styles'

const Auth = () => {
  const { error, loading } = useCurrentUserQuery()

  if (loading) return <div>Loading...</div>

  const isAuthorized = !error

  return (
    <StyledAuth>
      <Header />
      <Outlet context={[isAuthorized]}/>
    </StyledAuth>
  )
}

export default Auth
