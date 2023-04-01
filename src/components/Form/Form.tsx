import React, {FC, useContext} from "react";
import {GridContext, GridDispatchContext} from "store/contexts";
import { Input } from '../ui'
interface Props {
    handleSubmit: (event: { preventDefault: () => void }) => void
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