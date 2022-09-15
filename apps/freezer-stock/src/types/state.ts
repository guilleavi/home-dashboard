import { ProductSummary, ProductToSave } from "./product"

enum ProductActions {
  GET_PRODUCT = "GET_PRODUCT",
  TYPE_PRODUCT = "TYPE_PRODUCT",
  UPDATE_HOW_MANY_MONTHS_FREEZE = "UPDATE_HOW_MANY_MONTHS_FREEZE",
  UPDATE_STORAGE_DATE = "UPDATE_STORAGE_DATE",
  UPDATE_UNITS_TO_STORAGE = "UPDATE_UNITS_TO_STORAGE",
}

interface ProductState {
  storagedProduct: ProductSummary
  newProductItem: ProductToSave
}

interface GetProductAction {
  type: ProductActions.GET_PRODUCT
  payload: ProductSummary
}

interface TypeProductAction {
  type: ProductActions.TYPE_PRODUCT
  payload: string
}

interface UpdateHowManyMonthsFreezeAction {
  type: ProductActions.UPDATE_HOW_MANY_MONTHS_FREEZE
  payload: number
}

interface UpdateStorageDateAction {
  type: ProductActions.UPDATE_STORAGE_DATE
  payload: string
}

interface UpdateUnitsToStorageAction {
  type: ProductActions.UPDATE_UNITS_TO_STORAGE
  payload: number
}

type ProductAction =
  | GetProductAction
  | TypeProductAction
  | UpdateHowManyMonthsFreezeAction
  | UpdateStorageDateAction
  | UpdateUnitsToStorageAction

export { ProductActions }
export type { ProductState, ProductAction }
