import type { ProductActions } from "@state/actions"
import { ProductState, initialState, reducer } from "@state/reducer"
import React, { PropsWithChildren, createContext, useReducer } from "react"

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
