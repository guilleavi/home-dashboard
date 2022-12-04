import ExpiringNextInfo from "@components/ExpiringNextInfo/ExpiringNextInfo"
import HowLongInfo from "@components/HowLongInfo/HowLongInfo"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import { ProductContext } from "@contexts/ProductProvider"
import { toPascalCase } from "@utils/strings"
import { useContext } from "react"

const ProductInfo = () => {
  const { state } = useContext(ProductContext)
  const { name, nextToExpireUnits } = state.storagedProduct

  return (
    <section>
      <header>
        <h2>{toPascalCase(name)}</h2>
      </header>
      <div className="card">
        <HowLongInfo />
        {nextToExpireUnits ? (
          <>
            <ExpiringNextInfo />
            <ShowDetailsLink slug={name}>Show Details</ShowDetailsLink>
          </>
        ) : null}
      </div>
    </section>
  )
}

export default ProductInfo
