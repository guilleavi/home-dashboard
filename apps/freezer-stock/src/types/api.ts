import { NextApiRequest } from "next"
import { Product, ProductInstance } from "./prisma/generated/client"
import { ProductDetails, ProductToSave } from "./product"

type Override<T1, T2> = Omit<T1, keyof T2> & T2

export type CustomRequest = Override<
  NextApiRequest,
  { query: { name: string }; method: string }
>

export type ProductDetailsCustomRequest = Override<
  CustomRequest,
  { body: ProductDetails }
>

export type ProductToSaveCustomRequest = Override<
  CustomRequest,
  { body: ProductToSave }
>

export type ProductWithInstances = Product & {
  instances: Array<ProductInstance>
}
