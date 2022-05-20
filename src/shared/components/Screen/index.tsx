import React, { FC, ReactNode } from 'react'
import { CloseButton, ScreenContainer, ScreenHeader, StyledScreen } from './Styles'
import IconClose from '../../images/close.svg'

type Props = {
  children?: ReactNode
  className?: string
  headerMenu?: ReactNode
  onClose: () => void
}

const Screen: FC<Props> = ({ children, className = '', headerMenu, onClose }) => (
  <StyledScreen className={className}>
    <ScreenContainer>
      <ScreenHeader>
        {headerMenu}
        <CloseButton onClick={() => onClose}>
          <img src={IconClose} alt="closeIcon" />
        </CloseButton>
      </ScreenHeader>
      {children}
    </ScreenContainer>
  </StyledScreen>
)

export default Screen
