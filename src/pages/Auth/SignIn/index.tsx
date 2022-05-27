import { useApolloClient } from '@apollo/client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, Navigate, useNavigate, useOutletContext } from 'react-router-dom'
import Input from '../../../shared/components/Input'
import { onSignIn, AuthType } from '../../../shared/utils/authAction'
import { linkPath } from '../../../shared/utils/linkPath'
import { validation } from '../../../shared/utils/validation'
import { AuthForm, AuthFormButton, AuthFormTitle, AuthLinkWrapper } from '../Styles'

const SignIn = () => {
  const client = useApolloClient()
  const navigate = useNavigate()
  const [isAuthorized] = useOutletContext<[boolean]>()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthType>({ criteriaMode: 'all' })

  const onSubmit: SubmitHandler<AuthType> = data => {
    void onSignIn(data).then(() => {
      void client.resetStore().then(() => {
        navigate(linkPath.project)
      })
    })
  }

  if (isAuthorized) return <Navigate to={linkPath.project} />

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthFormTitle>Sign In</AuthFormTitle>
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
        <AuthFormButton type='submit'>Sign In</AuthFormButton>
        <AuthLinkWrapper>
          <Link to={linkPath.signup}>sign up</Link>
        </AuthLinkWrapper>
      </AuthForm>
    </>
  )
}

export default SignIn
