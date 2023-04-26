import type { ProductSummary, ProductToSave } from "@custom-types/product"
import type { ProductActions } from "./actions"
import { ProductActionType } from "./actions"

export interface ProductState {
  storagedProduct: ProductSummary
  newProductItem: ProductToSave
  errors: Array<string>
}

export const initialState: ProductState = {
  storagedProduct: {} as ProductSummary,
  newProductItem: {} as ProductToSave,
  errors: [],
}

export const reducer = (
  state: ProductState,
  action: ProductActions,
): ProductState => {
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
        errors: [],
      }
    case ProductActionType.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      console.error("Action not implemented", action)
      throw new Error()
  }
}
