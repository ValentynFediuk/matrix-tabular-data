import { CellValues } from "types";

export const useRowsSum = (matrix: CellValues[][]): number[] => {
    return matrix.map((row: CellValues[]) => {
        return row.reduce((accumulator: number, currentValue: CellValues) => {
            return accumulator + currentValue.amount;
        }, 0);
    });
};
