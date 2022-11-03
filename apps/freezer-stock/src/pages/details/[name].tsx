import StockDetails from "components/StockDetails/StockDetails"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"
import { ParsedUrlQuery } from "querystring"

const DetailsPage = ({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <StockDetails name={name} />
)

interface ContextParams extends ParsedUrlQuery {
  name: string
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ContextParams>,
) => {
  // TODO: add asserts to remove ! on params

  return {
    props: { name: context.params!.name },
  }
}

export default DetailsPage
