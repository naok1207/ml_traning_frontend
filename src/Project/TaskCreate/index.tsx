import React, { FC, useState } from 'react'
import Button from '../../shared/components/Button'
import Input from '../../shared/components/Input'
import TextArea from '../../shared/components/TextArea'
import { Form, StyledTaskCreate, Title } from './Styles'

type Props = {
  modalClose: () => void
  onCreate: (title: string, description: string) => void
}

const TaskCreate: FC<Props> = ({ modalClose, onCreate }) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  return (
    <StyledTaskCreate>
      <Title>Create Task</Title>
      <Form>
        <Input label="title" onChange={(e) => setTitle(e.target.value)} />
        <TextArea
          label="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          onClick={() => {
            onCreate(title, description)
            setTitle('')
            setDescription('')
            modalClose()
          }}
        >
          Create
        </Button>
      </Form>
    </StyledTaskCreate>
  )
}

export default TaskCreate
