import {createContext} from "react";

export const GridContext = createContext({columns: 0, rows: 0})
export const GridDispatchContext = createContext({type: 'setColumns', columns: 0})