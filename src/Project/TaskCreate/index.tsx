import React, { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TaskAttributes, useCreateTaskMutation } from '../../graphql/graphql'
import Input from '../../shared/components/Input'
import TextArea from '../../shared/components/TextArea'
import { Form, StyledTaskCreate, SubmitButton, Title } from './Styles'

type Props = {
  modalClose: () => void
}

const TaskCreate: FC<Props> = ({ modalClose }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    clearErrors,
  } = useForm<TaskAttributes>({ criteriaMode: 'all' })
  const [createTask] = useCreateTaskMutation({ refetchQueries: ['Tasks'] })

  const onSubmit: SubmitHandler<TaskAttributes> = (data) => {
    void createTask({ variables: { params: data } })
    reset()
    clearErrors()
    modalClose()
  }

  return (
    <StyledTaskCreate>
      <Title>Create Task</Title>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="title"
          {...register('title', {
            required: 'This is required.',
          })}
          errors={errors}
        />
        <TextArea label="description" {...register('description')} />
        <SubmitButton type="submit">Create</SubmitButton>
      </Form>
    </StyledTaskCreate>
  )
}

export default TaskCreate
