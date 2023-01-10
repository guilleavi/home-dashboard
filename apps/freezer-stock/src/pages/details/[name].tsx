import PageContainer from "containers/PageContainer/PageContainer"
import Spinner from "@components/Spinner/Spinner"
import StockDetails from "@components/StockDetails/StockDetails"
import type { ContextParams } from "@custom-types/context"
import type { ProductDetails } from "@custom-types/product"
import { getProductDetails, getAllProductDetails } from "@services/products"
import { toPascalCase } from "@utils/strings"
import Link from "next/link"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"
import { useEffect, useState } from "react"

const DetailsPage = ({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const title = `${toPascalCase(name)} Stock Details`

  const [instances, setInstances] = useState<Array<ProductDetails>>([])
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    // TODO: move the fetch to the server, SSG
    if (name === "all") {
      const fetchAllDetails = async () => {
        setShowSpinner(true)
        setInstances(await getAllProductDetails())
        setShowSpinner(false)
      }

      void fetchAllDetails()
    } else {
      const fetchDetails = async (productName: string) => {
        setShowSpinner(true)
        setInstances(await getProductDetails(productName))
        setShowSpinner(false)
      }

      void fetchDetails(name)
    }
  }, [name])

  // TODO: replace spinner logic with useTransition
  return (
    <PageContainer htmlTitle={`Freezer stock - ${title}`} pageTitle={title}>
      <Spinner isActive={showSpinner}>
        <StockDetails instances={instances} />
      </Spinner>
      {/* TODO: return to last searched product */}
      <Link href="/">
        <button type="button" className="main-button">
          Back
        </button>
      </Link>
    </PageContainer>
  )
}

/* eslint-disable @typescript-eslint/require-await */
export const getServerSideProps = async (
  context: GetServerSidePropsContext<ContextParams>,
) => ({
  props: { name: context.params?.name ?? "" },
})
/* eslint-enable @typescript-eslint/require-await */

export default DetailsPage
