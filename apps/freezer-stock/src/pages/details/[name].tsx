import StockDetails from "@components/StockDetails/StockDetails"
import PageContainer from "@containers/PageContainer/PageContainer"
import type { ContextParams } from "@custom-types/context"
import type { ProductDetails } from "@custom-types/product"
import {
  getAllInstances,
  getAllProductsName,
  getProductInstances,
} from "@services/queries"
import { toPascalCase } from "@utils/strings"
import Link from "next/link"
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next/types"

// TODO: page should load faster and show spinner while is loading data
const DetailsPage = ({
  name,
  instances,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = `${toPascalCase(name)} Stock Details`

  return (
    <PageContainer htmlTitle={`Freezer stock - ${title}`} pageTitle={title}>
      <StockDetails instances={instances} />
      <Link
        href={{
          pathname: "/",
          ...(name !== "all" && { query: { name } }),
        }}
      >
        {/* TODO: remove button, use anchor */}
        <button className="main-button" type="button">
          Back
        </button>
      </Link>
    </PageContainer>
  )
}

export const getStaticProps = async (
  context: GetStaticPropsContext<ContextParams>,
) => {
  const name = context.params?.name ?? ""
  let instances = [] as Array<ProductDetails>

  if (name === "all") {
    instances = await getAllInstances()
  } else {
    instances = await getProductInstances(name)
  }

  return {
    props: {
      name,
      instances: JSON.parse(JSON.stringify(instances)) as Array<ProductDetails>,
    },
  }
}

export const getStaticPaths = async () => {
  const productNames = await getAllProductsName()
  const paths = productNames.map((productName) => ({
    params: {
      name: productName,
    },
  }))

  const allProducts = {
    params: {
      name: "all",
    },
  }

  paths.push(allProducts)

  return {
    paths,
    fallback: "blocking",
  }
}

export default DetailsPage
