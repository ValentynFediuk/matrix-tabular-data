import clsx from 'clsx'
import React from 'react'
import styles from './Button.module.scss'
import { type ButtonProps } from './Button.props'

export const Button: React.FC<ButtonProps> = ({
  children,
  typeBtn,
  appearance,
  loadingData,
  handleClick,
  ...props
}) => (
  <button
    type={typeBtn === 'submit' ? 'submit' : 'button'}
    className={clsx(styles.btn, {
      [styles.primary]: appearance === 'primary'
    })}
    onClick={handleClick}
    {...props}
  >
    {children}
  </button>
)
