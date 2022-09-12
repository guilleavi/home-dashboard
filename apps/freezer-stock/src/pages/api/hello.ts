// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

interface Data {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const HTTP_SUCCESS = 200
  res.status(HTTP_SUCCESS).json({ name: "John Doe" })
}
