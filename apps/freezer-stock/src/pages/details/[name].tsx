import PageContainer from "containers/PageContainer/PageContainer"
import StockDetails from "@components/StockDetails/StockDetails"
import type { ContextParams } from "@custom-types/context"
import type { ProductDetails } from "@custom-types/product"
import { toPascalCase } from "@utils/strings"
import Link from "next/link"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"
import {
  getAllInstances,
  getAllProductsName,
  getProductInstances,
} from "@services/queries"

const DetailsPage = ({
  name,
  instances,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const title = `${toPascalCase(name)} Stock Details`

  return (
    <PageContainer htmlTitle={`Freezer stock - ${title}`} pageTitle={title}>
      <StockDetails instances={instances} />
      {/* TODO: return to last searched product */}
      <Link href="/">
        <button type="button" className="main-button">
          Back
        </button>
      </Link>
    </PageContainer>
  )
}

export const getStaticProps = async (
  context: GetServerSidePropsContext<ContextParams>,
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
