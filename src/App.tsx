import {useReducer, useState} from 'react';
import {Table, Form} from "./components";
import {GridContext, GridDispatchContext} from './store/contexts';
import {gridReducer} from "./store/reducers";

type CellId = number; // unique value for all table
type CellValue = number; // three digit random number

type Cell = {
    id: CellId,
    amount: CellValue
}

export const App = () => {
    const [matrix, setMatrix] = useState<Cell[][]>([])

    const [grid, dispatch] = useReducer(gridReducer, {
        rows: 0,
        columns: 0,
    });

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        let temp:[] = []
        for (let i = 0; i < grid.rows; i++) {
            let foo:[] = []
            for (let j = 0; j < grid.columns; j++) {
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

    return (
        <div className="container">
            <GridContext.Provider value={grid}>
                <GridDispatchContext.Provider value={dispatch}>
                    <Form
                        handleSubmit={handleSubmit}
                    />
                    <Table matrix={matrix} />
                </GridDispatchContext.Provider>
            </GridContext.Provider>
        </div>
    );
}