import ProductInfo from "@components/ProductInfo/ProductInfo"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import SeeDetails from "@components/SeeDetailsLink/SeeDetailsLink"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import { ProductContext } from "@contexts/ProductProvider"
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
      <main>
        <SeeDetails name="all" />
        <SearchInput />
        {name ? (
          <>
            <ProductInfo />
            <StorageDate />
            <UnitsController />
            <SaveButton />
          </>
        ) : null}
      </main>
    </>
  )
}

export default HomePage
