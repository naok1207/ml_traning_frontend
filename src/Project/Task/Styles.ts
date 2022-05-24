import styled, { css } from 'styled-components'
import Button from '../../shared/components/Button'

const hoverStyles = css`
  background: rgba(255, 255, 255, 0.2);
`

export const StyledTask = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  z-index: 10;
  cursor: pointer;

  & + & {
    margin-top: 8px;
  }
  &:hover {
    ${hoverStyles}
  }
  &[active] {
    ${hoverStyles}
  }
`

export const Title = styled.p`
  font-size: 16px;
`

export const StyledButton = styled(Button)`
  margin-left: auto;
`
