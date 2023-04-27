import { ProductSummary, ProductToSave, UpdateProductActionPayloads } from "@custom-types/product"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface ProductState {
  storagedProduct: ProductSummary
  newProductItem: ProductToSave
  errors: Array<string>
}

const initialState: ProductState = {
  storagedProduct: {} as ProductSummary,
  newProductItem: {} as ProductToSave,
  errors: [],
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    get(state, action: PayloadAction<ProductSummary>) {
      state.storagedProduct = action.payload
      state.newProductItem = {
        name: action.payload.name.toLowerCase(),
        monthsToFreeze: action.payload.monthsToFreeze,
        storageDate: new Date(),
        units: 0,
      }
    },
    update(state, action: PayloadAction<UpdateProductActionPayloads>) {
      state.newProductItem = {
        ...state.newProductItem,
        [action.payload.key]: action.payload.value,
      }
    },
    merge(state) {
      state.newProductItem = {
        name:
          state.newProductItem.name.toLowerCase() ||
          state.storagedProduct.name.toLowerCase(),
        monthsToFreeze:
          state.newProductItem.monthsToFreeze ||
          state.storagedProduct.monthsToFreeze,
        storageDate: state.newProductItem.storageDate,
        units: state.newProductItem.units,
      }
    },
    cleanUp(state) {
      state.storagedProduct = {
        name: "",
        monthsToFreeze: 0,
        nextToExpireDate: new Date(),
        nextToExpireUnits: 0,
      }
      state.newProductItem = {
        name: "",
        monthsToFreeze: 0,
        storageDate: new Date(),
        units: 0,
      }
      state.errors = []
    },
    errors(state, action: PayloadAction<Array<string>>) {
      state.errors = action.payload
    },
  },
})

export const { get, update, merge, cleanUp, errors } = productSlice.actions
export default productSlice.reducer
