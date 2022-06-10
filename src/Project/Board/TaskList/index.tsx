import { FC } from 'react'
import { Task as TaskType } from '../../../graphql/graphql'
import Task from '../../Task'
import { StyledList } from './Styles'

type Props = {
  tasks: TaskType[]
  onSelectId: (taskId: string) => void
}

const TaskList: FC<Props> = ({ tasks = [], onSelectId }) => (
  <StyledList radius={10}>
    {tasks.map((task: TaskType) => (
      <Task task={task} key={task.id} onSelectId={onSelectId} />
    ))}
  </StyledList>
)

export default TaskList
