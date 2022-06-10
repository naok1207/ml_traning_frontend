import React, { useEffect, useState } from 'react'
import { Task, useTasksQuery } from '../../graphql/graphql'
import Button from '../../shared/components/Button'
import Card from '../../shared/components/Card'
import PageError from '../../shared/components/PageError'
import Modal from '../../shared/components/Modal'
import { toggleActive } from '../../shared/utils/toggleActive'
import TaskCreate from '../TaskCreate'
import { StyledBoard } from './Styles'
import TaskDetail, { StyledDetail } from './TaskDetail'
import TaskList from './TaskList'

const Board = () => {
  const taskQuery = useTasksQuery()
  const [isShownCreateTaskModal, setIsShownCreateTaskModal] =
    useState<boolean>(false)
  const [selectedTaskId, setSelectedTaskId] = useState<string>()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    if (!taskQuery.data) return
    setTasks(taskQuery.data.tasks)
  }, [taskQuery.data])

  if (taskQuery.loading) return <div>Loading</div>
  if (taskQuery.error) return <PageError error={taskQuery.error} />

  const handleSelectId = (taskId: string) => {
    const beforeTaskId = selectedTaskId || ''
    setSelectedTaskId(taskId)
    const taskElementId = (id: string) => `task-${id}`
    toggleActive(taskElementId(beforeTaskId), taskElementId(taskId))
  }

  return (
    <StyledBoard>
      <Modal isShown={isShownCreateTaskModal} onClose={() => setIsShownCreateTaskModal(false)}>
        <TaskCreate modalClose={() => setIsShownCreateTaskModal(false)} />
      </Modal>
      <Card radius={10}>
        <Button onClick={() => setIsShownCreateTaskModal(true)}>
          + Create Task
        </Button>
      </Card>
      <TaskList tasks={tasks} onSelectId={handleSelectId} />
      {selectedTaskId ? (
        <TaskDetail id={selectedTaskId} onDelete={() => setSelectedTaskId('')} />
      ) : (
        <StyledDetail />
      )}
    </StyledBoard>
  )
}

export default Board
