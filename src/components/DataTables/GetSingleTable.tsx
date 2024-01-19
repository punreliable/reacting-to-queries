import { ColumnDef, createColumnHelper, useReactTable } from '@tanstack/react-table'
// import type TablePerson from './types/TablePerson'
// import type TableUser from './types/TableUser'

let options: {}[] = 
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

// const data: TableUser[] = []

// const columnHelper = createColumnHelper<TypePerson>()

// Make some columns!
const defaultColumns = [

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

const GetSingleTable = () => {
    return (
        <div>
            <h1>Get Single Table</h1>
            {/* <div className="table">{table}</div> */}
        </div>
    )
}