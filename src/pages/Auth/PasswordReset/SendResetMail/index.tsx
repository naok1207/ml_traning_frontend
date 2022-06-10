import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'
import { PasswordReset, SendResetMailType } from '../../../../shared/utils/authAction'
import { validation } from '../../../../shared/utils/validation'
import { AuthForm } from '../../Styles'

const SendResetMail = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SendResetMailType>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<SendResetMailType> = data => {
    void PasswordReset.sendEmail(data)
    setIsSubmitted(true)
  }

  if (isSubmitted) return <p>再設定メール送信完了</p>

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <AuthForm onSubmit={handleSubmit(onSubmit)} >
        <Input
            label="メールアドレス"
            {...register('email', {
              required: validation.required,
              pattern: validation.pattern.email,
            })}
            errors={errors}
        />
        <Button type='submit'>送信</Button>
      </AuthForm>
    </>
  )
}

export default SendResetMail
