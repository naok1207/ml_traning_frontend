import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, Navigate, useNavigate, useOutletContext } from 'react-router-dom'
import Input from '../../../shared/components/Input'
import { onSignUp, SignUpAuthType } from '../../../shared/utils/authAction'
import { linkPath } from '../../../shared/utils/linkPath'
import { validation } from '../../../shared/utils/validation'
import { AuthForm, AuthFormButton, AuthFormTitle, AuthLinkWrapper } from '../Styles'

const SignUp = () => {
  const navigate = useNavigate()
  const [isAuthorized] = useOutletContext<[boolean]>()
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SignUpAuthType>({ criteriaMode: 'all' })
  const password = watch("password", "");

  const onSubmit: SubmitHandler<SignUpAuthType> = data => {
    void onSignUp(data).then(() => {
      navigate(linkPath.signin)
    })
  }

  if (isAuthorized) return <Navigate to={linkPath.project} />

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthFormTitle>Sign Up</AuthFormTitle>
        <Input
          label="メールアドレス"
          {...register('email', {
            required: validation.required,
            pattern: validation.pattern.email,
          })}
          errors={errors}
        />
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
        <AuthFormButton type='submit'>Sign Up</AuthFormButton>
        <AuthLinkWrapper>
          <Link to={linkPath.signin}>sign in</Link>
        </AuthLinkWrapper>
      </AuthForm>
    </>
  )
}

export default SignUp
