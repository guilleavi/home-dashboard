import { ProductDetails } from "@custom-types/product"
import { ProductContext } from "contexts/ProductProvider"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getAllProductDetails, getProductDetails } from "services/products"
import styles from "./StockDetails.module.scss"

const StockDetails = ({ name }: { name?: string }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // TODO: add sort and filter

  return (
    <section className="main-container">
      <h1>{name} stock details</h1>
      <section>
        {instances ? (
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
                    <td>{instance.expirationDate}</td>
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
    </section>
  )
}

export default StockDetails
