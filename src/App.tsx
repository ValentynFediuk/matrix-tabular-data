import {useReducer, useState} from 'react';
import { Table, Form } from 'components';
import { GridContext, GridDispatchContext } from 'store/contexts';
import { gridReducer } from 'store/reducers';
import { CellValues } from 'types';

const createMatrix = (rows: number, columns: number) => {
    const matrix: CellValues[][] = [];

    for (let i = 0; i < rows; i++) {
        const row: CellValues[] = [];
        for (let j = 0; j < columns; j++) {
            row.push({ id: i * j, amount: Math.floor(Math.random() * 900) + 100 });
        }
        matrix.push(row);
    }

    return matrix;
};

export const App = () => {
    const [matrix, setMatrix] = useState<CellValues[][]>([]);

    const [grid, dispatch] = useReducer(gridReducer, {
        rows: 0,
        columns: 0,
    });

    const handleSubmit = (event: {preventDefault: () => void}) => {
        event.preventDefault();
        const newMatrix = createMatrix(grid.rows, grid.columns);
        setMatrix(newMatrix);
    };

    return (
        <div className="container">
            <GridContext.Provider value={grid}>
                <GridDispatchContext.Provider value={dispatch}>
                    <Form handleSubmit={handleSubmit} />
                    <Table matrix={matrix} />
                </GridDispatchContext.Provider>
            </GridContext.Provider>
        </div>
    );
};

