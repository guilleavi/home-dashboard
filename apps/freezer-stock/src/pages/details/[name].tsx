import PageContainer from "@components/PageContainer/PageContainer"
import StockDetails from "@components/StockDetails/StockDetails"
import type { ContextParams } from "@custom-types/context"
import { toPascalCase } from "@utils/strings"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"

const DetailsPage = ({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const title = `${toPascalCase(name)} Stock Details`
  return (
    <PageContainer htmlTitle={`Freezer stock - ${title}`} pageTitle={title}>
      <StockDetails name={name} />
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
