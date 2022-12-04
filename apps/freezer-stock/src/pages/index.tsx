import PageContainer from "@components/PageContainer/PageContainer"
import ProductInfo from "@components/ProductInfo/ProductInfo"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import Spinner from "@components/Spinner/Spinner"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import { ProductContext } from "@contexts/ProductProvider"
import { useContext, useState } from "react"

const HomePage = () => {
  const title = "Freezer Stock"

  const { state, dispatch } = useContext(ProductContext)
  const { name } = state.storagedProduct

  const [showSpinner, setShowSpinner] = useState(false)

  const handleToggleSpinner = (show: boolean) => {
    setShowSpinner(show)
  }

  return (
    <PageContainer htmlTitle={title} pageTitle={title}>
      <Spinner show={showSpinner}>
        <ShowDetailsLink slug="all">Show All Products</ShowDetailsLink>
        <SearchInput
          onToggleSpinner={handleToggleSpinner}
          dispatchFoundProduct={dispatch}
        />
        {name ? (
          <>
            <ProductInfo />
            <StorageDate />
            <UnitsController />
            <SaveButton />
          </>
        ) : null}
      </Spinner>
    </PageContainer>
  )
}

export default HomePage
