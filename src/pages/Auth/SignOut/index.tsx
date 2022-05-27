import { useApolloClient } from '@apollo/client'
import { Navigate } from 'react-router-dom'
import { onSignOut } from '../../../shared/utils/authAction'
import { getStoredAuthToken } from '../../../shared/utils/authToken'
import { linkPath } from '../../../shared/utils/linkPath'

const SignOut = () => {
  const client = useApolloClient()
  const token = getStoredAuthToken()

  if (!token) return <Navigate to={linkPath.signin} />

  void onSignOut(token).then(() => {
    void client.resetStore()
  }).catch((err) => {
    console.log('error', err)
  })

  return <div>Signed Out Completed</div>
}

export default SignOut
