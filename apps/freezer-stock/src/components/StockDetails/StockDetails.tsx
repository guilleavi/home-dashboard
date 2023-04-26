import type { ProductDetails } from "@custom-types/product"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import Box from '@mui/material/Box';
import { trimDateString } from "@utils/date"

interface StockDetailsProps {
  instances: Array<ProductDetails>
}

interface GridValueGetterParamsWithRows extends GridValueGetterParams {
  row: { expirationDate: Date }
}

const columns: Array<GridColDef> = [
  { field: "name", headerName: "Name", flex: 2, headerClassName: 'header' },
  { field: "units", headerName: "Units", minWidth: 50, headerClassName: 'header' },
  {
    field: "expirationDate",
    headerName: "Expiration Date",
    minWidth: 120,
    headerClassName: 'header',
    valueGetter: (params: GridValueGetterParamsWithRows) =>
      trimDateString(params.row.expirationDate.toString()),
  },
]

const StockDetails = ({ instances }: StockDetailsProps) =>
  instances.length ? (
    <Box sx={{ width: '100%', '& .header': { color: 'black', backgroundColor: 'lightgray' } }}>
      <DataGrid
        getRowId={(row: { instanceId: number }) => row.instanceId}
        rows={instances}
        columns={columns}
        pageSize={8}
        sortingOrder={["desc", "asc"]}
        autoHeight={true}
      />
    </Box>
  ) : (
    <p>No results found</p>
  )

export default StockDetails
