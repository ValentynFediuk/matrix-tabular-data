import { type FC, type ReactNode } from 'react'
import styles from './Cell.module.scss'

interface Props {
  children: ReactNode
}

export const Cell: FC<Props> = ({ children }) => (
        <div className={styles.cell}>{children}</div>
)
