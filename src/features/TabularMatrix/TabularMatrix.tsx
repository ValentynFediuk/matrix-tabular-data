import { useMatrix } from 'hooks'
import React, { useReducer, useState } from 'react'
import { GridContext, GridDispatchContext } from 'store/contexts'
import { gridReducer } from 'store/reducers'

import { type CellValues } from 'types'
import { Form, Table } from './components'

export const TabularMatrix: React.FC = () => {
  const [matrix, setMatrix] = useState<CellValues[][]>([])
  const [grid, dispatch] = useReducer(gridReducer, {
    rows: '',
    columns: '',
    closest: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const newMatrix = useMatrix(+grid.rows, +grid.columns)
    setMatrix(newMatrix)
  }

  return (
    <GridContext.Provider value={grid}>
      <GridDispatchContext.Provider value={dispatch}>
        <Form handleSubmit={handleSubmit} />
        <Table matrix={matrix} />
      </GridDispatchContext.Provider>
    </GridContext.Provider>
  )
}
