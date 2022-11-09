import { ProductDetails } from "@custom-types/product"
import { getProductDetails, getAllProductDetails } from "@services/products"
import { trimDateString } from "@utils/date"
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./StockDetails.module.scss"

type StockDetailsProps = {
  name: string
}

const StockDetails = ({ name }: StockDetailsProps) => {
  const [instances, setInstances] = useState<Array<ProductDetails>>([])

  useEffect(() => {
    const fetchDetails = async (productName: string) => {
      setInstances(await getProductDetails(productName))
    }

    const fetchAllDetails = async () => {
      setInstances(await getAllProductDetails())
    }

    if (name === "all") {
      fetchAllDetails()
    } else {
      fetchDetails(name)
    }
  }, [name])

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
            {instances.map((instance, i) => {
              const formattedDate = trimDateString(
                instance.expirationDate.toString(),
              )

              return (
                <tr key={i}>
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
        <p>No results</p>
      )}
      <Link href="/">
        <button className="main-button">Back</button>
      </Link>
    </>
  )
}

export default StockDetails
