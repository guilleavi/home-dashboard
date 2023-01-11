import { ProductDetailsCustomRequest } from "@custom-types/api"
import type { ProductDetails } from "@custom-types/product"
import { HttpMethod, StatusCode } from "@enums/api"
import { getProductInstances, updateIntanceUnits } from "@services/queries"
import type { NextApiResponse } from "next"

const handleProductInstances = async (
  req: ProductDetailsCustomRequest,
  res: NextApiResponse<Array<ProductDetails> | null>,
) => {
  const {
    query: { name },
    body,
    method,
  } = req

  switch (method) {
    case HttpMethod.GET:
      res.send(await getProductInstances(name))
      break
    case HttpMethod.PUT:
      await updateIntanceUnits(body)
      res.send(null)
      break
    default:
      res.setHeader("Allow", [HttpMethod.GET, HttpMethod.PUT])
      res.status(StatusCode.NOT_ALLOW).end(`Method ${method} Not Allowed`)
  }
}

export default handleProductInstances
