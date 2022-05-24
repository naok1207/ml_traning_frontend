import { css } from 'styled-components'

export const neomorphic = css`
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0.005) -12%,
    rgba(255, 255, 255, 0.025) 114%
  );
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(0, 0, 0, 0.1),
    5px 5px 20px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(255, 255, 255, 0.15);
`

export const neomorphicSink = css`
  box-shadow: inset 5px 5px 4px rgba(0, 0, 0, 0.3),
    inset -2px -2px 4px rgba(0, 0, 0, 0.1),
    inset 5px 5px 20px rgba(0, 0, 0, 0.5),
    inset -5px -5px 10px rgba(255, 255, 255, 0.15);
`
