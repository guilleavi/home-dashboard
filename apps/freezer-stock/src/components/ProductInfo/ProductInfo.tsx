import CardContainer from "@components/CardContainer/CardContainer"
import ExpiringNext from "@components/ExpiringNext/ExpiringNext"
import MonthsToFreeze from "@components/MonthsToFreeze/MonthsToFreeze"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import { ProductContext } from "@contexts/ProductProvider"
import { toPascalCase } from "@utils/strings"
import { useContext } from "react"

type ProductInfoProps = {
  name: string
  nextToExpireUnits: number
}

// TODO: delete this component
const ProductInfo = ({ name, nextToExpireUnits }: ProductInfoProps) => {
  return (
    <CardContainer title={toPascalCase(name)}>
      <MonthsToFreeze />
      {nextToExpireUnits ? (
        <>
          <ExpiringNext />
          <ShowDetailsLink slug={name}>Show Details</ShowDetailsLink>
        </>
      ) : null}
    </CardContainer>
  )
}

export default ProductInfo
