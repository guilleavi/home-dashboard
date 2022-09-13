import type { NextApiRequest, NextApiResponse } from "next"
import { Product } from "../../../types/product"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Product>,
) {
    const HTTP_SUCCESS = 200
    res.status(HTTP_SUCCESS).json({})
}
