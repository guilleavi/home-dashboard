import CardContainer from "@components/CardContainer/CardContainer"
import ExpiringNextInfo from "@components/ExpiringNextInfo/ExpiringNextInfo"
import HowLongInfo from "@components/HowLongInfo/HowLongInfo"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import { ProductContext } from "@contexts/ProductProvider"
import { toPascalCase } from "@utils/strings"
import { useContext } from "react"

type ProductInfoProps = {
  name: string
  nextToExpireUnits: number
}

const ProductInfo = ({ name, nextToExpireUnits }: ProductInfoProps) => {
  return (
    <CardContainer title={toPascalCase(name)}>
      <HowLongInfo />
      {nextToExpireUnits ? (
        <>
          <ExpiringNextInfo />
          <ShowDetailsLink slug={name}>Show Details</ShowDetailsLink>
        </>
      ) : null}
    </CardContainer>
  )
}

export default ProductInfo
