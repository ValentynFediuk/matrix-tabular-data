import { type CellValues } from 'types'

export const useRowsSum = (matrix: CellValues[][]): number[] => matrix.map((row: CellValues[]) => row.reduce((accumulator: number, currentValue: CellValues) => accumulator + currentValue.amount, 0))
