import clsx from 'clsx'
import { type FC } from 'react'
import styles from './Input.module.scss'
import { type InputProps } from './Input.types'

export const Input: FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  id,
  label,
  errorMessage,
  appearance
}) => (
        <div className={clsx(styles.wrapper, {
          [styles.primary]: appearance === 'primary'
        })}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" onChange={onChange} value={value} placeholder={placeholder}/>
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
)
