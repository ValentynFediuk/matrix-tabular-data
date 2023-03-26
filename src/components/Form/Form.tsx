import {FC} from "react";

interface Props {
    rows: number
    columns: number
    handleSubmit: any
    handleSetRows: any
    handleSetColumns: any
}
export const Form:FC<Props> = ({rows, columns, handleSubmit, handleSetRows, handleSetColumns}) => {
   return (
       <form onSubmit={handleSubmit}>
           <input
               type="text"
               placeholder="M - rows"
               value={rows}
               onChange={(event) => handleSetRows(event)}
           />
           <input
               type="text"
               placeholder="N - columns"
               value={columns}
               onChange={(event) => handleSetColumns(event)}
           />
           <button type="submit">Submit</button>
       </form>

   )
}