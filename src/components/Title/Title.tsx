import clsx from 'clsx'
import { type FC } from 'react'
import styles from './Title.module.scss'
import { type TitleProps } from './Title.props'

export const Title: FC<TitleProps> = ({
  children,
  size,
  typeTitle,
  className,
  ...props
}) => {
  const classNameBuilder = clsx(styles.title, className, {
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.l]: size === 'l'
  })

  const titleBuilder = () => {
    switch (typeTitle) {
      case 'h1':
        return (
          <h1 className={classNameBuilder} {...props}>
            {children}
          </h1>
        )
      case 'h2':
        return (
          <h2 className={classNameBuilder} {...props}>
            {children}
          </h2>
        )
      case 'h3':
        return (
          <h3 className={classNameBuilder} {...props}>
            {children}
          </h3>
        )
      default:
        return (
          <h1 className={classNameBuilder} {...props}>
            {children}
          </h1>
        )
    }
  }

  return titleBuilder()
}
