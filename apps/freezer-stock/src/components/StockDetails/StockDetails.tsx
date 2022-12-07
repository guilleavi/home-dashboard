import type { ProductDetails } from "@custom-types/product"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { trimDateString } from "@utils/date"
import styles from "./StockDetails.module.scss"

type StockDetailsProps = {
  instances: Array<ProductDetails>
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 300 },
  { field: "units", headerName: "Units", width: 125 },
  {
    field: "expirationDate",
    headerName: "Expiration Date",
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      trimDateString(params.row["expirationDate"].toString()),
  },
]

const StockDetails = ({ instances }: StockDetailsProps) => {
  return (
    <>
      {instances && instances.length ? (
        <div className={styles["list"]}>
          <DataGrid
            getRowId={(row) => row.instanceId}
            rows={instances}
            columns={columns}
            pageSize={8}
            sortingOrder={["desc", "asc"]}
          />
        </div>
      ) : (
        <p>No results found</p>
      )}
    </>
  )
}

export default StockDetails
