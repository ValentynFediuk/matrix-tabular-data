import { type GridActions, type GridValues } from 'types'

export const gridReducer = (grid: GridValues, action: GridActions) => {
  switch (action.type) {
    case 'setRows': {
      return {
        ...grid,
        rows: action.rows
      }
    }
    case 'setColumns': {
      return {
        ...grid,
        columns: action.columns
      }
    }
    case 'setClosest': {
      return {
        ...grid,
        closest: action.closest
      }
    }
    default: {
      throw Error('Unknown action')
    }
  }
}
