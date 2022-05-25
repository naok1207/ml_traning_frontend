import React, { useEffect, useState } from 'react'
import { Task, useTasksQuery } from '../../graphql/graphql'
import Button from '../../shared/components/Button'
import Card from '../../shared/components/Card'
import Modal from '../../shared/components/Modal'
import { toggleActive } from '../../shared/utils/toggleActive'
import TaskCreate from '../TaskCreate'
import { StyledBoard } from './Styles'
import TaskDetail, { StyledDetail } from './TaskDetail'
import TaskList from './TaskList'

const Board = () => {
  const taskQuery = useTasksQuery()
  const [isShowCreateTaskModal, setIsShowCreateTaskModal] =
    useState<boolean>(false)
  const [selectTaskId, setSelectTaskId] = useState<string>()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    if (!taskQuery.data) return
    setTasks(taskQuery.data.tasks)
  }, [taskQuery.data])

  if (taskQuery.loading) return <div>Loading</div>

  const handleSelectId = (taskId: string) => {
    const beforeTaskId = selectTaskId || ''
    setSelectTaskId(taskId)
    const taskElementId = (id: string) => `task-${id}`
    toggleActive(taskElementId(beforeTaskId), taskElementId(taskId))
  }

  return (
    <StyledBoard>
      {isShowCreateTaskModal && (
        <Modal onClose={() => setIsShowCreateTaskModal(false)}>
          <TaskCreate
            modalClose={() => setIsShowCreateTaskModal(false)}
          />
        </Modal>
      )}
      <Card radius={10}>
        <Button onClick={() => setIsShowCreateTaskModal(true)}>
          + Create Task
        </Button>
      </Card>
      <TaskList tasks={tasks} onSelectId={handleSelectId} />
      { selectTaskId ? (
        <TaskDetail
          id={selectTaskId}
          onDelete={() => setSelectTaskId('')}
        />
      ) : (
        <StyledDetail />
      )}

    </StyledBoard>
  )
}

export default Board
