import type {
  ProductSummary,
  UpdateDatePayload,
  UpdateMonthsPayload,
  UpdateNamePayload,
  UpdateUnitsPayload,
} from "@custom-types/product"

export enum ProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  MERGE_PRODUCT = "MERGE_PRODUCT",
  CLEAR_PRODUCT = "CLEAR_PRODUCT",
  SET_ERRORS = "SET_ERRORS",
}

interface GetProductAction {
  type: ProductActionType.GET_PRODUCT
  payload: ProductSummary
}

interface UpdateProductAction {
  type: ProductActionType.UPDATE_PRODUCT
  payload:
    | UpdateNamePayload
    | UpdateMonthsPayload
    | UpdateDatePayload
    | UpdateUnitsPayload
}

interface MergeProductAction {
  type: ProductActionType.MERGE_PRODUCT
}

interface ClearProductAction {
  type: ProductActionType.CLEAR_PRODUCT
}

interface SetErrorsAction {
  type: ProductActionType.SET_ERRORS
  payload: Array<string>
}

export type ProductActions =
  | GetProductAction
  | UpdateProductAction
  | MergeProductAction
  | ClearProductAction
  | SetErrorsAction
