import {GridActions, GridValues} from "types";

export const gridReducer = (grid: GridValues, action: GridActions) => {
    switch (action.type) {
        case 'setRows': {
            return {
                rows: action.rows,
                columns: grid.columns
            }
        }
        case 'setColumns': {
            return {
                rows: grid.rows,
                columns: action.columns
            }
        }
        default: {
            throw Error("Unknown action")
        }
    }
}