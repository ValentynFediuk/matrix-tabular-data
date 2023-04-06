import { type DetailedHTMLProps, type HTMLAttributes, type ReactNode } from 'react'

export interface TitleProps
  extends DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
  > {
  children: ReactNode
  size: 's' | 'm' | 'l'
  typeTitle: 'h1' | 'h2' | 'h3'
}
