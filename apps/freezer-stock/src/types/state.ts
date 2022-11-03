import { ProductSummary, ProductToSave } from "./product"

export type ProductState = {
  storagedProduct: ProductSummary
  newProductItem: ProductToSave
}

export enum ProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  MERGE_PRODUCT = "MERGE_PRODUCT",
  CLEAR_PRODUCT = "CLEAR_PRODUCT",
}

type GetProductAction = {
  type: ProductActionType.GET_PRODUCT
  payload: ProductSummary
}

type ProductToSaveValueType = [
  name: string,
  monthsToFreeze: number,
  storageDate: string,
  units: number,
]

type UpdateProductAction = {
  type: ProductActionType.UPDATE_PRODUCT
  // TODO: add discrimination union
  payload: {
    key: keyof ProductToSave
    value: string | number | Date
  }
}

type MergeProductAction = {
  type: ProductActionType.MERGE_PRODUCT
}

type ClearProductAction = {
  type: ProductActionType.CLEAR_PRODUCT
}

export type ProductActions =
  | GetProductAction
  | UpdateProductAction
  | MergeProductAction
  | ClearProductAction
