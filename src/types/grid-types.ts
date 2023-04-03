type CellId = number; // unique value for all table
type CellValue = number; // three digit random number

export type CellValues = {
    id: CellId,
    amount: CellValue
}

export interface GridValues {
    columns: string
    rows: string
}
export interface SetRowsAction {
    type: "setRows";
    rows: string;
}

export interface SetColumnsAction {
    type: "setColumns";
    columns: string;
}

export type GridActions = SetRowsAction | SetColumnsAction;

export type GridActionTypes = 'setRows' | 'setColumns'
