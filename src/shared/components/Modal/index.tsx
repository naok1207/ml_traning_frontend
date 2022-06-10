import React, { FC, ReactNode } from 'react'
import Card from '../Card'
import { CloseButton, StyledModal } from './Styles'
import IconClose from '../../images/close.svg'

type Props = {
  isShown: boolean
  children?: ReactNode
  onClose: () => void
}

const Modal: FC<Props> = ({ isShown, children, onClose }) => (
  <StyledModal hidden={!isShown}>
    <Card radius={10}>
      <CloseButton onClick={() => onClose()}>
        <img src={IconClose} alt="closeIcon" />
      </CloseButton>
      {children}
    </Card>
  </StyledModal>
)

export default Modal
