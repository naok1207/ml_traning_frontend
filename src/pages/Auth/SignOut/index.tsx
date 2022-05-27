import { Navigate } from 'react-router-dom'
import { onSignOut } from '../../../shared/utils/authAction'
import { getStoredAuthToken } from '../../../shared/utils/authToken'
import { linkPath } from '../../../shared/utils/linkPath'

const SignOut = () => {
  const token = getStoredAuthToken()

  if (!token) return <Navigate to={linkPath.signin} />

  void onSignOut(token)

  return <div>Signed Out Completed</div>
}

export default SignOut
