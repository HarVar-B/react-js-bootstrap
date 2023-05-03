import * as React   from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

export default function DataTable({ rows, columns, checkboxSelection = false, sx = {}, ...rest }) {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 50
  });
  const paginationModelChangeHandler = (model, details) => {
    console.log({ model, details });
    if (paginationModel.page < model.page && rows.length < rest.rowCount) {
      rest.loadMore && rest.loadMore();
    }
    setPaginationModel({ ...model });
  };

  return (
    <div style={{ height: "75vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        checkboxSelection={checkboxSelection}
        sx={sx}
        onPaginationModelChange={paginationModelChangeHandler}
        paginationModel={paginationModel}
        paginationMode="server"
        {...rest}
      />
    </div>
  );
}
