import PageContainer from "@components/PageContainer/PageContainer"
import ProductInfo from "@components/ProductInfo/ProductInfo"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import Spinner from "@components/Spinner/Spinner"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { getProduct } from "@services/products"
import { sleep } from "@utils/dev"
import { useContext, useEffect, useState } from "react"

const HomePage = () => {
  const title = "Freezer Stock"

  const { state, dispatch } = useContext(ProductContext)
  const { name, nextToExpireUnits } = state.storagedProduct

  const [searchedValue, setSearchedValue] = useState("")
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()

    const fetchProduct = async (name: string, abortSignal: AbortSignal) => {
      setShowSpinner(true)
      dispatch({
        type: ProductActionType.CLEAR_PRODUCT,
      })

      // TODO: remove the sleep, this is just for testing the spinner
      getProduct(name, abortSignal).then((fetchedProduct) => {
        sleep().then(() => {
          dispatch({
            type: ProductActionType.GET_PRODUCT,
            payload: fetchedProduct,
          })

          setShowSpinner(false)
        })
      })
    }

    if (searchedValue.trim()) {
      fetchProduct(searchedValue, abortController.signal).catch((err) =>
        console.error(err),
      )
    }

    return () => {
      // cancel all previos fetch calls
      abortController.abort()
    }
  }, [searchedValue, dispatch])

  return (
    <PageContainer htmlTitle={title} pageTitle={title}>
      <Spinner show={showSpinner}>
        <ShowDetailsLink slug="all">Show All Products</ShowDetailsLink>
        <SearchInput onSearch={(value) => setSearchedValue(value)} />
        {name ? (
          <>
            <ProductInfo name={name} nextToExpireUnits={nextToExpireUnits} />
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
