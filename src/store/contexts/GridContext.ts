import {createContext, Dispatch} from "react";
import {GridActions} from "types";

export const GridContext = createContext({columns: '', rows: ''})
export const GridDispatchContext = createContext<Dispatch<GridActions>>(() => {
    // default dispatch function can be an empty function or throw an error
    throw new Error('Dispatch function not set');
});