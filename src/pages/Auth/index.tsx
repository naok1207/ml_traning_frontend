import React from 'react'
import { Outlet } from 'react-router-dom'
import { useCurrentUserQuery } from '../../graphql/graphql'
import { StyledAuth } from './Styles'

const Auth = () => {
  const { error, loading } = useCurrentUserQuery()

  if (loading) return <div>Loading...</div>

  const isAuthorized = !error

  return (
    <StyledAuth>
      <Outlet context={[isAuthorized]}/>
    </StyledAuth>
  )
}

export default Auth
