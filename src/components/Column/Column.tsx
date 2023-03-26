import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode
}
export const Column:FC<Props> = ({children}) => {
    return (
        <div>{children}</div>
    )
}