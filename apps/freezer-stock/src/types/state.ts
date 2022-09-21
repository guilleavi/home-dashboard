import { ProductSummary, ProductToSave } from "./product"

export type ProductState = {
  storagedProduct: ProductSummary
  newProductItem: ProductToSave
}

export enum ProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
}

type GetProductAction = {
  type: ProductActionType.GET_PRODUCT
  payload: ProductSummary
}

type UpdateProductAction = {
  type: ProductActionType.UPDATE_PRODUCT
  payload: {
    key: keyof ProductToSave,
    value: string | number
  }
}

export type ProductActions =
  | GetProductAction
  | UpdateProductAction
