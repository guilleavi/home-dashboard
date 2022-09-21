import { ProductSummary, ProductToSave } from "@custom-types/product"
import {
  ProductState,
  ProductActions,
  ProductActionType,
} from "@custom-types/state"
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
      }
    case ProductActionType.UPDATE_PRODUCT:
      return {
        ...state,
        newProductItem: {
          ...state.newProductItem,
          [action.payload.key]: action.payload.value,
        },
      }
    default:
      console.error("Action not implemented", action)
      throw new Error()
  }
}
