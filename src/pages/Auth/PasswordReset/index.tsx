import React from 'react'
import { useSearchParams } from 'react-router-dom'
import ResetForm from './ResetForm'
import SendResetMail from './SendResetMail'

const PasswordReset = () => {
  const [searchParams] = useSearchParams();

  const resetPasswordToken = searchParams.get('reset_password_token')

  return (
    <div>
      <p>Password Reset</p>
      { resetPasswordToken ?
          <ResetForm resetPasswordToken={resetPasswordToken}/> : <SendResetMail /> }
    </div>
  )
}

export default PasswordReset
