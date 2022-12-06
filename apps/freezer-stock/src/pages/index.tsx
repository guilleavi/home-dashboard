import CardContainer from "containers/CardContainer/CardContainer"
import ExpiringNext from "@components/ExpiringNext/ExpiringNext"
import MonthsToFreeze from "@components/MonthsToFreeze/MonthsToFreeze"
import PageContainer from "containers/PageContainer/PageContainer"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import Spinner from "@components/Spinner/Spinner"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import { ProductContext } from "@contexts/ProductProvider"
import { ProductActionType } from "@custom-types/state"
import { getProduct, saveProduct } from "@services/products"
import { trimDateString } from "@utils/date"
import { sleep } from "@utils/dev"
import { toPascalCase } from "@utils/strings"
import { useContext, useEffect, useState } from "react"

const HomePage = () => {
  const title = "Freezer Stock"

  const { state, dispatch } = useContext(ProductContext)
  const { monthsToFreeze, name, nextToExpireDate, nextToExpireUnits } =
    state.storagedProduct
  const { monthsToFreeze: newMonthsToFreeze, units } = state.newProductItem

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
        sleep(500).then(() => {
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

  const handleChangeMonthsToFreeze = (updatedMonthsToFreeze: number) => {
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "monthsToFreeze", value: updatedMonthsToFreeze },
    })
  }

  const handleChangeStorageDate = (newDate: string) => {
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: {
        key: "storageDate",
        value: trimDateString(new Date(newDate).toISOString()),
      },
    })
  }

  const handleChangeUnits = (units: number) => {
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "units", value: units },
    })
  }

  const handleOnSave = async () => {
    setShowSpinner(true)

    // add missing information to newProductItem
    dispatch({
      type: ProductActionType.MERGE_PRODUCT,
    })

    // TODO: remove the sleep, this is just for testing the spinner
    await saveProduct(state.newProductItem).then(() => {
      sleep().then(() => {
        dispatch({
          type: ProductActionType.CLEAR_PRODUCT,
        })

        setShowSpinner(false)
      })
    })
  }

  return (
    <PageContainer htmlTitle={title} pageTitle={title}>
      <Spinner show={showSpinner}>
        <ShowDetailsLink slug="all">Show All Products</ShowDetailsLink>
        <SearchInput onSearch={(value) => setSearchedValue(value)} />
        {name ? (
          <>
            <CardContainer title={toPascalCase(name)}>
              <MonthsToFreeze
                originalMonthsToFreeze={monthsToFreeze}
                onChangeMonthsToFreeze={handleChangeMonthsToFreeze}
              />
              {nextToExpireUnits ? (
                <>
                  <ExpiringNext
                    name={name}
                    nextToExpireDate={trimDateString(
                      nextToExpireDate.toString(),
                    )}
                    nextToExpireUnits={nextToExpireUnits}
                  />
                  <ShowDetailsLink slug={name}>Show Details</ShowDetailsLink>
                </>
              ) : null}
            </CardContainer>
            <StorageDate onChangeStorageDate={handleChangeStorageDate} />
            <UnitsController units={units} onChangeUnits={handleChangeUnits} />
            <SaveButton
              newMonthsToFreeze={newMonthsToFreeze}
              storagedMonthsToFreeze={monthsToFreeze}
              onSave={handleOnSave}
            />
          </>
        ) : null}
      </Spinner>
    </PageContainer>
  )
}

export default HomePage
