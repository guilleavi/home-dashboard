import StockDetails from "@components/StockDetails/StockDetails"
import PageContainer from "@containers/PageContainer/PageContainer"
import type { ContextParams } from "@custom-types/context"
import type { ProductDetails } from "@custom-types/product"
import { getAllInstances, getProductInstances } from "@queries/instance"
import { useAppDispatch } from "@store/hooks"
import { cleanUp } from "@store/productSlice"
import { toPascalCase } from "@utils/strings"
import Link from "next/link"
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next/types"
import { useEffect } from "react"

const DetailsPage = ({
  name,
  instances,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const title = `${toPascalCase(name)} Stock Details`

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(cleanUp())
  }, [dispatch])

  return (
    <PageContainer htmlTitle={`Freezer stock - ${title}`} pageTitle={title}>
      <StockDetails instances={instances} />
      <Link
        className="navigation-link"
        href={{
          pathname: "/",
          /*
           * TODO: fix fetch when is back
           * ...(name !== "all" && { query: { name } }),
           */
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
