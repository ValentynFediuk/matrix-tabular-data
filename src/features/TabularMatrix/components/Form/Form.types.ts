export interface FormProps {
  handleSubmit: (event: { preventDefault: () => void }) => void
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
