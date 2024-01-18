import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import punLogo from './assets/logo-punreliable.svg'
import { ColumnDef, createColumnHelper, useReactTable } from '@tanstack/react-table'
import TableUser from './types/TableUser'
import  TablePerson from './types/TablePerson'

import './App.scss'
import Users from './components/DataFetching/Users'

function App() {
  
  const [count, setCount] = useState(0)

  let options = 
    [
      {
        "firstName": "Tanner",
        "lastName": "Linsley",
        "age": 33,
        "visits": 100,
        "progress": 50,
        "status": "Married"
      },
      {
      "firstName": "Kevin",
      "lastName": "Vandy",
      "age": 27,
      "visits": 200,
      "progress": 100,
      "status": "Single"
    }
  ]
  const data: TableUser[] = []

  const columnHelper = createColumnHelper<TablePerson>()
  
  // Make some columns!
  const defaultColumns = [
    // Grouping Column
    columnHelper.group({
      header: 'Name',
      footer: props => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor('firstName', {
          cell: info => info.getValue(),
          footer: props => props.column.id,
        }),
        // Accessor Column
        columnHelper.accessor(row => row.lastName, {
          id: 'lastName',
          cell: info => info.getValue(),
          header: () => <span>Last Name</span>,
          footer: props => props.column.id,
        }),
      ],
    }),
    // Grouping Column
    columnHelper.group({
      header: 'Info',
      footer: props => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor('age', {
          header: () => 'Age',
          footer: props => props.column.id,
        }),
        // Grouping Column
        columnHelper.group({
          header: 'More Info',
          columns: [
            // Accessor Column
            columnHelper.accessor('visits', {
              header: () => <span>Visits</span>,
              footer: props => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor('status', {
              header: 'Status',
              footer: props => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor('progress', {
              header: 'Profile Progress',
              footer: props => props.column.id,
            }),
          ],
        }),
      ],
    }),
  ]


const table = useReactTable({ defaultColumns, data })

  return (
    <>
      <h1>Data Fetching</h1>
      <Users />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={punLogo} className="logo" alt="Vite logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

      </div>
      <div className="table">{table}</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
