import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { Confirm } from '../../../shared/utils/authAction';
import { linkPath } from '../../../shared/utils/linkPath';
import ResendMail from './ResendMail';

const Confirmation = () => {
  const [isAccepted, setIsAccepted] = useState<boolean>(false)
  const [searchParams] = useSearchParams()

  const confirmationToken = searchParams.get('confirmation_token')

  useEffect(() => {
    if (!confirmationToken) return
    void Confirm.onConfirm({ confirmationToken })
      .then(() => {
        setIsAccepted(true)
      })
  }, [confirmationToken])

  if (!confirmationToken) return <ResendMail />

  return (
    <div>
      <p>Confirmation {isAccepted ? "accepted" : "faild" }</p>
      {!isAccepted && <Link to={linkPath.confirmationResend}>再送信</Link>}
    </div>
  )
}

export default Confirmation
