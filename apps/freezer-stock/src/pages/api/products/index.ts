import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { ProductSummary } from "@custom-types/product"

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ProductSummary[] | null>,
) {
    const allProducts = await prisma.product.findMany({
        include: {
            instances: {
                orderBy: {
                    expirationDate: "asc",
                },
            },
        },
    })

    if (allProducts) {
        // TODO: transform allProducts to ProductSummary[]

        res.send([] as ProductSummary[])
        return
    }

    res.send(allProducts)
}
