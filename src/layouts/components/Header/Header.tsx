import { type FC } from 'react'
import styles from './Header.module.scss'
import { type HeaderProps } from './Header.props'

export const Header: FC<HeaderProps> = ({ children }) => (
        <header className={styles.header}>
            {children}
        </header>
)
