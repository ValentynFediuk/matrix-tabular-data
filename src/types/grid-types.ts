type CellId = number; // unique value for all table
type CellValue = number; // three digit random number

export type CellValues = {
    id: CellId,
    amount: CellValue
}

export interface GridValues {
    columns: number
    rows: number
}