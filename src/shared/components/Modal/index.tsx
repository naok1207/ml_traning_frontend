import React, { FC, ReactNode } from 'react'
import Card from '../Card'
import { CloseButton, StyledModal } from './Styles'
import IconClose from '../../images/close.svg'

type Props = {
  children?: ReactNode
}

const Modal: FC<Props> = ({ children }) => (
  <StyledModal>
    <Card radius={10}>
      <CloseButton>
        <img src={IconClose} alt="closeIcon" />
      </CloseButton>
      {children}
    </Card>
  </StyledModal>
)

export default Modal
