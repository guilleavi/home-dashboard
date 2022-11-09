import { ProductDetails } from "@custom-types/product"
import { getProductDetails, getAllProductDetails } from "@services/products"
import { trimDateString } from "@utils/date"
import { toPascalCase } from "@utils/strings"
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./StockDetails.module.scss"

type StockDetailsProps = {
  name: string
}

const StockDetails = ({ name = "" }: StockDetailsProps) => {
  const [instances, setInstances] = useState<Array<ProductDetails>>([])

  useEffect(() => {
    const fetchDetails = async (productName: string) => {
      setInstances(await getProductDetails(productName))
    }

    const fetchAllDetails = async () => {
      setInstances(await getAllProductDetails())
    }

    if (name) {
      fetchDetails(name)
    } else {
      fetchAllDetails()
    }
  }, [name])

  // TODO: add sort and filter
  return (
    <main className="main-container">
      <h1>{toPascalCase(name)} Stock Details</h1>
      <section>
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
                return (
                  <tr key={i}>
                    <td>{instance.name}</td>
                    <td>{instance.units}</td>
                    <td>
                      {trimDateString(instance.expirationDate.toString())}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <p>No results</p>
        )}
      </section>
      <Link href="/">
        <button className="main-button">Back</button>
      </Link>
    </main>
  )
}

export default StockDetails
