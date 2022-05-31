import React, { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../../../../shared/components/Button'
import Input from '../../../../shared/components/Input'
import { PasswordReset, PasswordResetType } from '../../../../shared/utils/authAction'
import { validation } from '../../../../shared/utils/validation'
import { AuthForm } from '../../Styles'

type Props = {
  resetPasswordToken: string
}

const ResetForm: FC<Props> = ({ resetPasswordToken }) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<PasswordResetType>({ criteriaMode: 'all' })
  const password = watch("password", "");

  const onSubmit: SubmitHandler<PasswordResetType> = data => {
    void PasswordReset.onReset(data).then(() => {
      setIsSubmitted(true)
    })
  }

  if (isSubmitted) return <p>パスワード再設定完了</p>

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <AuthForm onSubmit={handleSubmit(onSubmit)} >
      <Input
          label="パスワード"
          type='password'
          {...register('password', {
            required: validation.required,
            pattern: validation.pattern.password,
          })}
          errors={errors}
        />
        <Input
          label='パスワード確認'
          type='password'
          {...register('passwordConfirmation',{
            required: validation.required,
            validate: value => validation.validate.confirm(password, value)
          })}
          errors={errors}
        />
        <Input
          type='hidden'
          value={resetPasswordToken}
          {...register('resetPasswordToken')}
        />
        <Button type='submit'>変更</Button>
      </AuthForm>
    </>
  )
}

export default ResetForm
