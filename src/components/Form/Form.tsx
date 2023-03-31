import React, {FC, useContext} from "react";
import { Input } from '../ui'
import {GridContext, GridDispatchContext} from "../../store/contexts";

interface Props {
    handleSubmit: () => void
}
export const Form:FC<Props> = ({handleSubmit}) => {
    const grid = useContext(GridContext)
    const dispatch = useContext(GridDispatchContext)


   return (
       <form onSubmit={handleSubmit}>
           <Input onChange={
               (event) => {
                   dispatch({
                       type: 'setRows',
                       rows: +event.target.value
                   })
               }
           } value={grid.rows} placeholder='M - rows' />
           <Input
               onChange={(event) => {
                   dispatch({
                       type: 'setColumns',
                       columns: +event.target.value
                   })
               }}
               value={grid.columns} placeholder='N - columns' />
           <button type="submit">Submit</button>
       </form>

   )
}