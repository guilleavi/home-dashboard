import StockDetails from "components/StockDetails/StockDetails"

const DetailsPage = ({ name }: { name: string }) => <StockDetails name={name} />

export const getServerSideProps = async (context: {
  params: { name: string }
}) => {
  const { name } = context.params

  return {
    props: { name },
  }
}

export default DetailsPage
