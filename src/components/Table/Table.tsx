import {FC, useState} from "react";
import styles from './Table.module.scss'
import {Row} from "../Row/Row";
import { Cell } from "../index";
interface Props {
    matrix: [][number];
}

export const Table:FC<Props> = ({matrix}) => {
    const [rowSum, setRowSum] = useState<number[]>([])
    const [columnAverage, setColumnAverage] = useState<number[]>([])

    const getRowSum = (rows: [][]) => {
        let arrSum: number[] = [];
        rows.forEach((element, index) => {
            let sum = 0

            element.forEach((object, index) => {
                sum += object['amount'];
            });
            arrSum.push(sum)
        })

        setRowSum(arrSum)
    }

    const getColumnAverage = (matrix: [][]) => {
        let columnSum: number[] = [];

        matrix.forEach((element, i) => {
            let sum = 0

            element.forEach((object, j) => {
                sum += object['amount'];
            })

            columnAverage.push(sum)
        })

        setColumnAverage(columnSum)
    }

    return (
        <div className={styles.table}>
            <div>
                {matrix.map((column:[], index: number) => (
                    <Row key={index}>
                        {column.map((row:[], index: number) => (
                            <Cell key={index}>{row.amount}</Cell>
                        ))}
                    </Row>
                ))}
                <div className='sum'>
                    {rowSum.map((el, index) => (
                        <Cell key={index}>Sum - {el}</Cell>
                    ))}
                </div>
                <div className='average'>

                </div>
            </div>
        </div>
    )
}