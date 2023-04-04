import {GridContext, GridDispatchContext} from "store/contexts";
import {Form, Table} from "components";
import {CellValues} from "types";
import {useReducer, useState} from "react";
import {gridReducer} from "store/reducers"
import {useMatrix} from "hooks";

export const MainPage = () => {
    const [matrix, setMatrix] = useState<CellValues[][]>([]);
    const [grid, dispatch] = useReducer(gridReducer, {
        rows: "",
        columns: "",
        closest: ""
    });

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const newMatrix = useMatrix(+grid.rows, +grid.columns);
        setMatrix(newMatrix);
    };

    return (
        <GridContext.Provider value={grid}>
            <GridDispatchContext.Provider value={dispatch}>
                <Form handleSubmit={handleSubmit}/>
                <Table matrix={matrix}/>
            </GridDispatchContext.Provider>
        </GridContext.Provider>
    )
}