import {ChangeEvent, ChangeEventHandler, FC} from "react"
import styles from './Input.module.scss'

interface Props {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: number
    placeholder: string
}

export const Input: FC<Props> = ({onChange, value, placeholder}) => {
    return (
        <div className={styles.wrapper}>
            <input type="text" onChange={onChange} value={value} placeholder={placeholder}/>
        </div>
    )
}