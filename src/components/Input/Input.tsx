import {FC} from "react"
import styles from './Input.module.scss'
import {InputProps} from "./Input.types";

export const Input: FC<InputProps> = ({
    onChange,
    value,
    placeholder,
    id,
    label,
    errorMessage,
}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" onChange={onChange} value={value} placeholder={placeholder}/>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
    )
}