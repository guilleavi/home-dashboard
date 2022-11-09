import ProductInfo from "@components/ProductInfo/ProductInfo"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import SeeDetails from "@components/SeeDetailsLink/SeeDetailsLink"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import { ProductContext } from "@contexts/ProductProvider"
import { toPascalCase } from "@utils/strings"
import Head from "next/head"
import { useContext } from "react"

const HomePage = () => {
  const { state } = useContext(ProductContext)
  const { name } = state.storagedProduct

  return (
    <>
      <Head>
        <title>Freezer stock</title>
      </Head>
      <header>
        <h1>Freezer Stock</h1>
      </header>
      <main className="main-container">
        <SearchInput />
        {name ? (
          <>
            <ProductInfo />
            <StorageDate />
            <UnitsController />
            <SaveButton />
          </>
        ) : null}
        <SeeDetails name="all" />
      </main>
    </>
  )
}

export default HomePage
