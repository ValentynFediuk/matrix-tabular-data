import {FC, useEffect, useState} from "react";
import styles from "./Table.module.scss"
import {CellValues} from "types";
import { Cell, Row } from "./components";
import {useColumnAverage, useRowsSum} from "hooks";
import {TableProps} from './Table.props'
export const Table:FC<TableProps> = ({matrix}) => {
    const [rowSum, setRowSum] = useState<number[]>([])
    const [columnAverage, setColumnAverage] = useState<number[]>([])

    useEffect(() => {
        setRowSum(useRowsSum(matrix))
        setColumnAverage(useColumnAverage(matrix))
    }, [matrix])

    return (
        <div className={styles.table}>
            <div>
                {matrix.map((row: CellValues[], index: number) => (
                    <Row key={index}>
                        {row.map((cellValue, subIndex) => (
                            <Cell key={`${index}-${subIndex}`}>{cellValue.amount}</Cell>
                        ))}
                    </Row>
                ))}
                <div className='sum'>
                    {rowSum.map((cellValue, index) => (
                        <Cell key={index}>Sum - {cellValue}</Cell>
                    ))}
                </div>
                <div className='average'>
                    {columnAverage.map((cellValue, index) => (
                        <Cell key={index}>Average - {cellValue}</Cell>
                    ))}
                </div>
            </div>
        </div>
    )
}