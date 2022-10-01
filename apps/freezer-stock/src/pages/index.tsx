import ProductInfo from "@components/ProductInfo/ProductInfo"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import SeeDetails from "@components/SeeDetails/SeeDetails"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import { ProductContext } from "@contexts/ProductProvider"
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
          <h2>{name}</h2>
          <ProductInfo />
          <StorageDate />
          <UnitsController />
          <SaveButton />
        </>
      ) : null}
      <SeeDetails name="all" />
    </main>
  )
}

export default HomePage
