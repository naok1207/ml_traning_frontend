import React, { FC } from 'react'
import { Task as TaskType } from '../../graphql/graphql'
import { StyledButton, StyledTask, Title } from './Styles'

type Props = {
  task: TaskType
  onSelectId: (taskId: string) => void
}

const Task: FC<Props> = ({ task, onSelectId }) => {
  const { id, title } = task

  return (
    <StyledTask key={id} id={`task-${task.id}`} onClick={() => onSelectId(id)}>
      <Title>{title}</Title>
      <StyledButton>Finish</StyledButton>
    </StyledTask>
  )
}

export default Task
