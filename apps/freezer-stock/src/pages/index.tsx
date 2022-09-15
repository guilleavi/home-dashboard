import { ProductActions } from "@custom-types/state"
import ProductContainer from "components/ProductContainer/ProductContainer"
import SaveButton from "components/SaveButton/SaveButton"
import SearchInput from "components/SearchInput/SearchInput"
import { ProductContext } from "contexts/ProductProvider"
import type { NextPage } from "next"
import { useContext, useCallback, useEffect } from "react"
import { getProduct } from "services/products"

const HomePage: NextPage = () => {
  
  const {
    state: {
      newProductItem: { name: selectedProductName },
    },
    dispatch,
  } = useContext(ProductContext)

  const fetchProduct = useCallback(
    async (signal: AbortSignal) => {
      const fetchedProduct = await getProduct({
        name: selectedProductName,
        abortSignal: signal,
      })
      dispatch({
        type: ProductActions.GET_PRODUCT,
        payload: fetchedProduct,
      })
    },
    [dispatch, selectedProductName],
  )

  useEffect(() => {
    const abortController = new AbortController()
    fetchProduct(abortController.signal).catch((err) => console.error(err))

    return () => {
      abortController.abort()
    }
  }, [fetchProduct, selectedProductName])

  return (
    <div className="page-container">
      <h1>Freezer Stock</h1>
      <div className="form-container">
        <SearchInput />
        <ProductContainer />
        {selectedProductName ? <SaveButton /> : null}
      </div>
    </div>
  )
}

export default HomePage
