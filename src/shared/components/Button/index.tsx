import React, { forwardRef, ReactNode } from 'react'
import { StyledButton } from './Styles'

type Props = {
  children?: ReactNode
  className?: string
  disable?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { children, className = '', disable = false, onClick, type = 'button' },
    ref
  ) => {
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
        type={type}
      >
        {children}
      </StyledButton>
    )
  }
)

export default Button
