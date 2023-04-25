import type { ProductSummary, ProductToSave } from "@custom-types/product"
import type { ProductActions } from "@state/actions"
import { ProductActionType } from "@state/actions"
import type { ProductState } from "@state/reducer"
import React, { PropsWithChildren, createContext, useReducer } from "react"

const initialState: ProductState = {
  storagedProduct: {} as ProductSummary,
  newProductItem: {} as ProductToSave,
}

export const ProductContext = createContext<{
  state: ProductState
  dispatch: React.Dispatch<ProductActions>
}>({ state: initialState, dispatch: () => null })

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

const reducer = (state: ProductState, action: ProductActions): ProductState => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCT:
      return {
        ...state,
        storagedProduct: action.payload,
        newProductItem: {
          name: action.payload.name.toLowerCase(),
          monthsToFreeze: action.payload.monthsToFreeze,
          storageDate: new Date(),
          units: 0,
        },
      }
    case ProductActionType.UPDATE_PRODUCT:
      return {
        ...state,
        newProductItem: {
          ...state.newProductItem,
          [action.payload.key]: action.payload.value,
        },
      }
    case ProductActionType.MERGE_PRODUCT:
      return {
        ...state,
        newProductItem: {
          name:
            state.newProductItem.name.toLowerCase() ||
            state.storagedProduct.name.toLowerCase(),
          monthsToFreeze:
            state.newProductItem.monthsToFreeze ||
            state.storagedProduct.monthsToFreeze,
          storageDate: state.newProductItem.storageDate,
          units: state.newProductItem.units,
        },
      }
    case ProductActionType.CLEAR_PRODUCT:
      return {
        storagedProduct: {
          name: "",
          monthsToFreeze: 0,
          nextToExpireDate: new Date(),
          nextToExpireUnits: 0,
        },
        newProductItem: {
          name: "",
          monthsToFreeze: 0,
          storageDate: new Date(),
          units: 0,
        },
      }
    default:
      console.error("Action not implemented", action)
      throw new Error()
  }
}
