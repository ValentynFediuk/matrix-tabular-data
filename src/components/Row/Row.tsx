import {FC, ReactNode} from "react";
import styles from './row.module.scss'
interface Props {
    children: ReactNode
}

export const Row:FC<Props> = ({children}) => {
    return (
        <div className={styles.row}>
            {children}
        </div>
    )
}