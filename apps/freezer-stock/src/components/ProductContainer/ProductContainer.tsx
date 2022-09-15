import FrozenProductInfo from "components/FrozenProductInfo/FrozenProductInfo"
import StorageDate from "components/StorageDate/StorageDate"
import UnitsController from "components/UnitsController/UnitsController"
import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"

const ProductContainer = () => {
  const {
    state: {
      storagedProduct: { name },
    },
  } = useContext(ProductContext)
  if (!name) {
    return null
  }

  return (
    <>
      <FrozenProductInfo />
      <StorageDate />
      <UnitsController />
    </>
  )
}

export default ProductContainer
