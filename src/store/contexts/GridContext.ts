import {createContext, Dispatch} from "react";
import {GridActions} from "../reducers";

export const GridContext = createContext({columns: 0, rows: 0})
export const GridDispatchContext = createContext<Dispatch<GridActions>>(() => {
    // default dispatch function can be an empty function or throw an error
    throw new Error('Dispatch function not set');
});