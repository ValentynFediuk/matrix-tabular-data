import { type FC, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const Column: FC<Props> = ({ children }) => (
        <div>{children}</div>
)
