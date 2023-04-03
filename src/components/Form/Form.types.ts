export interface FormProps {
    handleSubmit: (event: { preventDefault: () => void }) => void
}

export interface FormVales {
    rows: string
    columns: string
    errors: {
        rowsError: boolean
        rowsErrorMessage: string
        columnsError: boolean
        columnsErrorMessage: string
    }
}