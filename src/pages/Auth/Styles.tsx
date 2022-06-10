import styled from 'styled-components'
import Button from '../../shared/components/Button'
import { color } from '../../shared/styles/color'

export const StyledAuth = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const AuthForm = styled.form`
  height: 600px;
  width: 300px;
`

export const AuthFormTitle = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const AuthFormButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 40px;
`

export const AuthLinkWrapper = styled.div`
  margin: 10px 0;
  a {
    color: ${color.primary};
    opacity: 0.6;

    &:hover {
      opacity: 0.8;
    }
  }
`
