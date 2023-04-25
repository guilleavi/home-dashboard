import CardContainer from "containers/CardContainer/CardContainer"
import NextToExpire from "@components/NextToExpire/NextToExpire"
import MonthsToFreeze from "@components/MonthsToFreeze/MonthsToFreeze"
import PageContainer from "containers/PageContainer/PageContainer"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import Spinner from "@components/Spinner/Spinner"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import { getProduct, saveProduct } from "@services/products"
import { trimDateString } from "@utils/date"
import { toPascalCase } from "@utils/strings"
import { useContext, useEffect, useReducer, useState } from "react"
import { reducer, initialState } from "state/reducer"
import { ProductActionType } from "state/actions"
import { useRouter } from "next/router"
import { assertIsString } from "@asserts/primitives"
import useFetchProduct from "hooks/useFetchProduct"
import { ProductContext } from "@contexts/ProductProvider"

const HomePage = () => {
    const title = "Freezer Stock"

    const { state, dispatch } = useContext(ProductContext)

    const router = useRouter()
    const queryParamName = router.query["name"] ?? ""

    assertIsString(queryParamName)

    // const [state, dispatch] = useReducer(reducer, initialState)
    const { monthsToFreeze, name, nextToExpireDate, nextToExpireUnits } =
        state.storagedProduct
    const { monthsToFreeze: newMonthsToFreeze, units } = state.newProductItem


    const [searchedValue, setSearchedValue] = useState(queryParamName)
    const [showSpinner, setShowSpinner] = useState(false)

    // const fetchedProduct = useFetchProduct(searchedValue)

    useEffect(() => {
        const abortController = new AbortController()

        // TODO: use SWR nextjs hook
        const fetchProduct = async (
            productName: string,
            abortSignal: AbortSignal,
        ) => {
            setShowSpinner(true)
            dispatch({
                type: ProductActionType.CLEAR_PRODUCT,
            })

            const fetchedProduct = await getProduct(productName, abortSignal)


            dispatch({
                type: ProductActionType.GET_PRODUCT,
                payload: fetchedProduct,
            })

            setShowSpinner(false)
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
    }, [dispatch, searchedValue])

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

    const handleChangeUnits = (productUnits: number) => {
        dispatch({
            type: ProductActionType.UPDATE_PRODUCT,
            payload: { key: "units", value: productUnits },
        })
    }

    const handleOnSave = async () => {
        setShowSpinner(true)

        // add missing information to newProductItem
        dispatch({
            type: ProductActionType.MERGE_PRODUCT,
        })

        await saveProduct(state.newProductItem)

        dispatch({
            type: ProductActionType.CLEAR_PRODUCT,
        })

        setShowSpinner(false)
    }

    // TODO: replace spinner logic with useTransition
    return (
        <PageContainer htmlTitle={title} pageTitle={title}>
            <Spinner isActive={showSpinner}>
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
                                    <NextToExpire
                                        name={name}
                                        nextToExpireDate={nextToExpireDate}
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
                            onSave={() => void handleOnSave}
                        />
                    </>
                ) : null}
            </Spinner>
        </PageContainer>
    )
}

export default HomePage
