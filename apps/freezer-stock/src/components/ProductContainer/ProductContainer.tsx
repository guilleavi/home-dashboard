import FrozenProductInfo from "components/FrozenProductInfo/FrozenProductInfo"
import SaveButton from "components/SaveButton/SaveButton"
import StorageDate from "components/StorageDate/StorageDate"
import UnitsController from "components/UnitsController/UnitsController"
import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"

const ProductContainer = () => {
  const {
    state: {
      storagedProduct: { name },
      newProductItem: { name: selectedProductName },
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
      {selectedProductName ? <SaveButton /> : null}
    </>
  )
}

export default ProductContainer
