import PageContainer from "containers/PageContainer/PageContainer"
import StockDetails from "@components/StockDetails/StockDetails"
import type { ContextParams } from "@custom-types/context"
import { toPascalCase } from "@utils/strings"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"
import Spinner from "@components/Spinner/Spinner"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ProductDetails } from "@custom-types/product"
import { getProductDetails, getAllProductDetails } from "@services/products"

const DetailsPage = ({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const title = `${toPascalCase(name)} Stock Details`

  const [instances, setInstances] = useState<Array<ProductDetails>>([])
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    setShowSpinner(true)

    if (name === "all") {
      const fetchAllDetails = async () => {
        setInstances(await getAllProductDetails())
      }

      fetchAllDetails()
    } else {
      const fetchDetails = async (productName: string) => {
        setInstances(await getProductDetails(productName))
      }

      fetchDetails(name)
    }

    setShowSpinner(false)
  }, [name])

  return (
    <PageContainer htmlTitle={`Freezer stock - ${title}`} pageTitle={title}>
      <Spinner show={showSpinner}>
        <StockDetails instances={instances} />
      </Spinner>
      <Link href="/">
        <button className="main-button">Back</button>
      </Link>
    </PageContainer>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ContextParams>,
) => {
  return {
    props: { name: context.params!.name },
  }
}

export default DetailsPage
