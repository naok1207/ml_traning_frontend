import React, { forwardRef, ReactNode } from 'react'
import { StyledButton } from './Styles'

type Props = {
  children?: ReactNode
  className?: string
  disable?: boolean
  onClick?: () => void
}

const Button = forwardRef<HTMLButtonElement, Props>(({ children, className = '', disable = false, onClick }, ref ) => {
  const handleClick = () => {
    if (!onClick) return
    onClick()
  }

  return (
    <StyledButton
      className={className}
      disabled={disable}
      onClick={handleClick}
      ref={ref}
    >
      {children}
    </StyledButton>
  )
})

export default Button
