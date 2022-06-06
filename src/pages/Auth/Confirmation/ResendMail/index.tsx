import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'
import { Confirm, ResendEmailType } from '../../../../shared/utils/authAction'
import { validation } from '../../../../shared/utils/validation'
import { AuthForm } from '../../Styles'

const ResendMail = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ResendEmailType>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<ResendEmailType> = data => {
    void Confirm.resendEmail(data)
    setIsSubmitted(true)
  }

  if (isSubmitted) return <p>認証メールの再送信完了</p>

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

export default ResendMail
