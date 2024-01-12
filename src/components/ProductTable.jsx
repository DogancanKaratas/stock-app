import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  {
    field: "_id",
    headerName: "#",
    flex: 1.4,
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "brand",
    headerName: "Brand",
    flex: 1.2,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    type: "number",
    flex: 1.5,
    headerAlign: "center",
  },
  {
    field: "action",
    headerName: "Action",
    type: "number",
    flex: 1.5,
    headerAlign: "center",
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1.5,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    headerAlign: "center",
  },
];



export default function ProductTable() {

    const { products } = useSelector((state) => state.stock);
    function getRowId(row) {
        return row._id;
      }
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
