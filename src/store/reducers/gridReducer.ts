interface GridValues {
    columns: number
    rows: number
}

export interface SetRowsAction {
    type: "setRows";
    rows: number;
}

export interface SetColumnsAction {
    type: "setColumns";
    columns: number;
}

type GridActions = SetRowsAction | SetColumnsAction;
export const gridReducer = (grid: GridValues, action:GridActions) => {
    switch (action.type) {
        case 'setRows': {
            if (action.rows < 0 || action.rows > 100) {
                return
            }
            return {
                rows: action.rows,
                columns: grid.columns
            }
        }
        case 'setColumns': {
            if (action.columns < 0 || action.columns > 100) {
                return
            }
            return {
                rows: grid.rows,
                columns: action.columns
            }
        }
        default: {
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}