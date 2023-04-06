import { type CellValues } from '../types'

export const useMatrix = (rows: number, columns: number) => {
  const matrix: CellValues[][] = []

  for (let i = 0; i < rows; i++) {
    const row: CellValues[] = []
    for (let j = 0; j < columns; j++) {
      row.push({ id: i * j, amount: Math.floor(Math.random() * 900) + 100 })
    }
    matrix.push(row)
  }

  return matrix
}
