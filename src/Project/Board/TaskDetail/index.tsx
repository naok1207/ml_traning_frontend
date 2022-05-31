import React, { FC, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  TaskAttributes,
  useDeleteTaskMutation,
  useTaskQuery,
  useUpdateTaskMutation,
} from '../../../graphql/graphql'
import Button from '../../../shared/components/Button'
import Input from '../../../shared/components/Input'
import TextArea from '../../../shared/components/TextArea'
import {
  DeleteButton,
  Description,
  Header,
  StyledDetail,
  Title,
  ToggleButton,
  ToggleLabel,
} from './Styles'

type Props = {
  id: string
  onDelete: () => void
}

const TaskDetail: FC<Props> = ({ id, onDelete }) => {
  const taskQuery = useTaskQuery({ variables: { taskId: id } })
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [deleteTask] = useDeleteTaskMutation({ refetchQueries: ['Tasks'] })
  const [updateTask] = useUpdateTaskMutation({ refetchQueries: ['Tasks'] })
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    clearErrors,
  } = useForm<TaskAttributes>({ criteriaMode: 'all' })

  useEffect(() => {
    setIsEditing(false)
    reset()
    clearErrors()
  }, [clearErrors, id, reset])

  if (!taskQuery?.data) return <StyledDetail />

  const {
    task: { title, description },
  } = taskQuery.data

  const onSubmit: SubmitHandler<TaskAttributes> = (data) => {
    void updateTask({ variables: { input: { id, params: data } } })
      .then(() => {
        setIsEditing(!isEditing)
      })
  }

  const handleDelete = () => {
    void deleteTask({
      variables: { input: { id } },
      update() {
        onDelete()
      }
    })
  }

  return (
    <StyledDetail>
      <Header>
        <ToggleLabel>{isEditing ? 'edit' : 'view'}</ToggleLabel>
        <ToggleButton onClick={() => setIsEditing(!isEditing)}>切り替え</ToggleButton>
        <DeleteButton onClick={handleDelete}>delete</DeleteButton>
      </Header>
      {isEditing ? (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="title"
            defaultValue={title}
            {...register('title', {
              required: 'This is required.',
            })}
            errors={errors}
          />
          <TextArea
            label="description"
            defaultValue={description || ''}
            {...register('description')}
            errors={errors}
          />
          <Button type="submit">update</Button>
        </form>
      ) : (
        <>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </>
      )}
    </StyledDetail>
  )
}

export default TaskDetail
export { StyledDetail }
