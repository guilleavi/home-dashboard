import ProductInfo from "components/ProductInfo/ProductInfo"
import SaveButton from "components/SaveButton/SaveButton"
import SearchInput from "components/SearchInput/SearchInput"
import StorageDate from "components/StorageDate/StorageDate"
import UnitsController from "components/UnitsController/UnitsController"
import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"

const HomePage = () => {
  const {
    state: {
      storagedProduct: { name },
    },
  } = useContext(ProductContext)

  return (
    <main className="main-container">
      <h1>Freezer Stock</h1>
      <SearchInput />
      {name ? (
        <>
          <ProductInfo />
          <StorageDate />
          <UnitsController />
          {name ? <SaveButton /> : null}
        </>
      ) : null}
      {/* TODO: add see all button to see the full stock */}
    </main>
  )
}

export default HomePage
