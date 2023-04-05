import {ChangeEventHandler} from "react";

export interface InputProps {
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string
    placeholder: string
    id: string
    label: string
    errorMessage: string
}