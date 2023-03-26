import {ChangeEvent, useEffect, useState} from 'react';
import {Table} from "./components/Table/Table";
import {Cell} from './components/Cell/Cell';
import {Form} from "./components/Form/Form";
import {Row} from "./components/Row/Row";
import {Column} from "./components/Column/Column";

type CellId = number; // unique value for all table
type CellValue = number; // three digit random number

type Cell = {
    id: CellId,
    amount: CellValue
}


export const App = () => {
    const [rows, setRows] = useState<number>(0);
    const [columns, setColumns] = useState<number>(0);
    const [matrix, setMatrix] = useState<any>([])

    const handleSetRows = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.target.value < 0 || +event.target.value > 100) {
            return
        } else {
            setRows(+event.target.value)
        }
    };

    const handleSetColumns = (event: ChangeEvent<HTMLInputElement>) => {
        if (+event.target.value < 0 || +event.target.value > 100) {
            return
        } else {
            setColumns(+event.target.value)
        }
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setMatrix([])
        let temp:[] = []
        for (let i = 0; i < rows; i++) {
            let foo:[] = []
            for (let j = 0; j < columns; j++) {
                let obj = {
                    id: i * j,
                    amount: Math.floor(Math.random() * 900) + 100
                }
                foo.push(obj)
            }
            temp.push(foo)
        }
        setMatrix(temp)
    };

    useEffect(() => {
        console.log(matrix)
    }, [matrix])

    return (
        <div className="container">
            <Form
                columns={columns}
                rows={rows}
                handleSetColumns={handleSetColumns}
                handleSetRows={handleSetRows}
                handleSubmit={handleSubmit}
            />
            <Table>
                {matrix.map((column:[], index: number) => (
                    <Row key={index}>
                        {column.map((row:[], index: number) => (
                            <Cell key={index}>{row.amount}</Cell>
                        ))}
                    </Row>
                ))}
            </Table>
        </div>
    );
}