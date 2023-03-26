import styles from './Cell.module.scss'
import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode
}

export const Cell:FC<Props> = ({children}) => {

    return (
        <div className={styles.cell}>{children}</div>
    )
}