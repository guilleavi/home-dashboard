import { ProductDetails } from "@custom-types/product"
import { trimDateString } from "@utils/date"
import styles from "./StockDetails.module.scss"

type StockDetailsProps = {
  instances: Array<ProductDetails>
}

const StockDetails = ({ instances }: StockDetailsProps) => {
  // TODO: add sort and filter
  return (
    <>
      {instances && instances.length ? (
        <table className={styles["list"]}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Units</th>
              <th>Expiration Date</th>
            </tr>
          </thead>
          <tbody>
            {instances.map((instance) => {
              const formattedDate = trimDateString(
                instance.expirationDate.toString(),
              )

              return (
                <tr key={instance.instanceId}>
                  <td>{instance.name}</td>
                  <td>{instance.units}</td>
                  <td>
                    <time dateTime={formattedDate}>{formattedDate}</time>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <p>No results found</p>
      )}
    </>
  )
}

export default StockDetails
