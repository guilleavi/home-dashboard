import { ProductSummary, ProductToSave } from "./product"

export interface ProductState {
  storagedProduct: ProductSummary
  newProductItem: ProductToSave
}

export enum ProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  MERGE_PRODUCT = "MERGE_PRODUCT",
  CLEAR_PRODUCT = "CLEAR_PRODUCT",
}

interface GetProductAction {
  type: ProductActionType.GET_PRODUCT
  payload: ProductSummary
}

interface UpdateProductAction {
  type: ProductActionType.UPDATE_PRODUCT
  // TODO: add discrimination union ???
  payload: {
    key: keyof ProductToSave
    value: string | number | Date
  }
}

interface MergeProductAction {
  type: ProductActionType.MERGE_PRODUCT
}

interface ClearProductAction {
  type: ProductActionType.CLEAR_PRODUCT
}

export type ProductActions =
  | GetProductAction
  | UpdateProductAction
  | MergeProductAction
  | ClearProductAction
