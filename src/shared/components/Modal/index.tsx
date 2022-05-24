import React, { FC, ReactNode } from 'react'
import Card from '../Card'
import { CloseButton, StyledModal } from './Styles'
import IconClose from '../../images/close.svg'

type Props = {
  children?: ReactNode
  onClose: () => void
}

const Modal: FC<Props> = ({ children, onClose }) => (
  <StyledModal>
    <Card radius={10}>
      <CloseButton onClick={() => onClose()}>
        <img src={IconClose} alt="closeIcon" />
      </CloseButton>
      {children}
    </Card>
  </StyledModal>
)

export default Modal
