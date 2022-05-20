import styled from 'styled-components'

type StyledCardProps = {
  radius: number
}

export const StyledCard = styled.div<StyledCardProps>`
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  position: relative;
  padding: 32px;
  color: #ffffff;
  background: linear-gradient(
      125deg, rgba(0, 0, 0, 0.4), rgba(50, 50, 50, 0.4)
    ), rgba(40, 40, 40, 1);
  background-blend-mode: soft-light, normal;
  box-shadow: -64px -64px 128px rgba(23, 23, 23, 0.5),
              24px 24px 128px rgba(0, 0, 0, 0.4);
  background-clip: padding-box;
  border: 4px solid transparent;
  border-radius: ${(props) => props.radius}px;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -4px;
    border-radius: inherit;
    background: linear-gradient(125deg, rgba(0, 0, 0, 1), rgba(15, 15, 15, 1))
  }
`
