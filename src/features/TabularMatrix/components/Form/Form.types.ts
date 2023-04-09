export interface FormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>)
}

export interface FormVales {
  rows: string
  columns: string
  closest: string
  closestLimit: number
  errors: {
    rowsError: boolean
    rowsErrorMessage: string
    columnsError: boolean
    columnsErrorMessage: string
    closestError: boolean
    closestErrorMessage: string
  }
}
