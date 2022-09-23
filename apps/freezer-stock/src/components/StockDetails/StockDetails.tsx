import { ProductDetails } from "@custom-types/product"
import { ProductContext } from "contexts/ProductProvider"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { getProductDetails } from "services/products"

const StockDetails = () => {
  const {
    state: {
      storagedProduct: { name },
    },
  } = useContext(ProductContext)
  const [instances, setInstances] = useState<Array<ProductDetails>>([])
  useEffect(() => {
    const fetchDetails = async (productName: string) => {
      setInstances(await getProductDetails(productName))
    }

    if (name) {
      fetchDetails(name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <table>
        <thead>
          <th>Product</th>
          <th>Units</th>
          <th>Expiration Date</th>
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
      <Link href="/">Back</Link>
    </div>
  )
}

export default StockDetails
