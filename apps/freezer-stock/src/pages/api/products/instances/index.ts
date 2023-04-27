import type { ProductDetails } from "@custom-types/product"
import { getAllInstances } from "@queries/instance"
import type { NextApiRequest, NextApiResponse } from "next"

const getAllInstancesAPI = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<ProductDetails>>,
) => {
  res.send(await getAllInstances())
}

export default getAllInstancesAPI
