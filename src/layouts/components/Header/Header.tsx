import {FC} from "react";
import styles from './Header.module.scss'
import { HeaderProps } from "./Header.props";

export const Header:FC<HeaderProps> = ({children}) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}