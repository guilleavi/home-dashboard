import ExpiringNextInfo from "@components/ExpiringNextInfo/ExpiringNextInfo"
import HowLongInfo from "@components/HowLongInfo/HowLongInfo"
import SeeDetails from "@components/SeeDetailsLink/SeeDetailsLink"
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
            <SeeDetails name={name} />
          </>
        ) : null}
      </div>
    </section>
  )
}

export default ProductInfo
