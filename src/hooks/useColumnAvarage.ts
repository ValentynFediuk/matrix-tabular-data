import { type CellValues } from 'types'

export const useColumnAverage = (matrix: CellValues[][]): number[] => {
  const rowsCount = matrix.length
  const columnsCount = matrix[0]?.length
  const result = new Array(columnsCount).fill(0)

  for (let col = 0; col < columnsCount; col++) {
    for (let row = 0; row < rowsCount; row++) {
      result[col] += matrix[row][col].amount / rowsCount
    }
  }

  return result
}
