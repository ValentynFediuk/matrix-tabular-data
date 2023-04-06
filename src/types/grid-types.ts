type CellId = number // unique value for all table
type CellValue = number // three digit random number

export interface CellValues {
  id: CellId
  amount: CellValue
}

export interface GridValues {
  columns: string
  rows: string
  closest: string
}
export interface SetRowsAction {
  type: 'setRows'
  rows: string
}

export interface SetColumnsAction {
  type: 'setColumns'
  columns: string
}

export interface SetClosestAction {
  type: 'setClosest'
  closest: string
}

export type GridActions = SetRowsAction | SetColumnsAction | SetClosestAction

export type GridActionTypes = 'setRows' | 'setColumns' | 'setClosest'
