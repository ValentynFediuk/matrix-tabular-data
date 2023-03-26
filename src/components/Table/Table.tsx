import {FC, ReactNode} from "react";
import styles from './Table.module.scss'
interface Props {
    children: ReactNode;
}
export const Table:FC<Props> = ({children}) => {
    return (
        <div className={styles.table}>
            <div>
                {children}
            </div>
        </div>
    )
}