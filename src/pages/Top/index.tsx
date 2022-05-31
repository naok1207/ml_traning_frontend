import React from 'react'
import Button from '../../shared/components/Button'
import Card from '../../shared/components/Card'
import Input from '../../shared/components/Input'
import Modal from '../../shared/components/Modal'
import Screen from '../../shared/components/Screen'
import TextArea from '../../shared/components/TextArea'

// しばらくサンプル置き場とする
const Top = () => (
  <>
    <h2>TOP</h2>
    <Card />
    <Input />
    <Button>+ AddTask</Button>
    <Screen onClose={() => console.log('close')} />
    <Modal isShown onClose={() => console.log('close')}>
      <Input label="password" placeholder="password" />
      <TextArea label="content" placeholder="content" />
    </Modal>
  </>
)

export default Top
