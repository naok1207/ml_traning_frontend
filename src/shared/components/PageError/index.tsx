import { ApolloError } from '@apollo/client'
import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { linkPath } from '../../utils/linkPath'

type Props = {
  error: ApolloError
}

const PageError: FC<Props> = ({ error }) => {
  const isAuthenticateError = error.graphQLErrors.some(graphqlError => graphqlError.extensions.code === 'AUTHENTICATION_ERROR')

  if (isAuthenticateError) {
    return <Navigate to={linkPath.signin} />
  }

  return <Navigate to={linkPath.notFound} />
}

export default PageError
