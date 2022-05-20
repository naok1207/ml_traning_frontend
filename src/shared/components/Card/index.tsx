import { FC, ReactNode } from "react"
import { StyledCard } from "./Styles"

type Props = {
  className?: string
  children?: ReactNode
  radius?: number
}

const Card: FC<Props> = ({ className = '', children, radius = 0 }) => (
  <StyledCard className={className} radius={radius}>{children}</StyledCard>
)

export default Card
