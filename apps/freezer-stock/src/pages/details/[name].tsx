import StockDetails from "@components/StockDetails/StockDetails"
import PageContainer from "@containers/PageContainer/PageContainer"
import type { ContextParams } from "@custom-types/context"
import type { ProductDetails } from "@custom-types/product"
import { getAllInstances, getProductInstances } from "@queries/instance"
import { toPascalCase } from "@utils/strings"
import Link from "next/link"
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next/types"

const DetailsPage = ({
  name,
  instances,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const title = `${toPascalCase(name)} Stock Details`

  return (
    <PageContainer htmlTitle={`Freezer stock - ${title}`} pageTitle={title}>
      <StockDetails instances={instances} />
      <Link
        className="navigation-link"
        href={{
          pathname: "/",
          ...(name !== "all" && { query: { name } }),
        }}
      >
        Back
      </Link>
    </PageContainer>
  )
}

// TODO: show spinner while the page is loading
export const getServerSideProps = async (
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

export default DetailsPage
