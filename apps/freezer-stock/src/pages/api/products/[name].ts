import { getProductWithNextToExpireUnits, saveProduct } from "@api/queries"
import { assertIsString } from "@asserts/primitives"
import { ProductToSaveCustomRequest } from "@custom-types/api"
import type { ProductSummary } from "@custom-types/product"
import { HttpMethod, StatusCode } from "@enums/api"
import type { NextApiResponse } from "next"

const handleProduct = async (
  req: ProductToSaveCustomRequest,
  res: NextApiResponse<ProductSummary | null>,
) => {
  const {
    query: { name },
    body,
    method,
  } = req

  assertIsString(name)

  switch (method) {
    case HttpMethod.GET:
      res.send(await getProductWithNextToExpireUnits(name))
      break
    case HttpMethod.POST:
      await saveProduct(body)
      res.send(null)
      break
    default:
      res.setHeader("Allow", [HttpMethod.GET, HttpMethod.POST])
      res.status(StatusCode.NOT_ALLOW).end(`Method ${method} Not Allowed`)
  }
}

export default handleProduct
