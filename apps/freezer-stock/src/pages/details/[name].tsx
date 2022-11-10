import StockDetails from "@components/StockDetails/StockDetails"
import type { ContextParams } from "@custom-types/context"
import { toPascalCase } from "@utils/strings"
import Head from "next/head"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next/types"

const DetailsPage = ({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Freezer stock - {toPascalCase(name)} Details</title>
      </Head>
      <header>
        <h1>{toPascalCase(name)} Stock Details</h1>
      </header>
      <main>
        <StockDetails name={name} />
      </main>
    </>
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
