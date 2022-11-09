import ExpiringNextInfo from "@components/ExpiringNextInfo/ExpiringNextInfo"
import HowLongInfo from "@components/HowLongInfo/HowLongInfo"
import SeeDetails from "@components/SeeDetails/SeeDetails"
import { ProductContext } from "@contexts/ProductProvider"
import { useContext } from "react"

const ProductInfo = () => {
  const { state } = useContext(ProductContext)
  const { name, nextToExpireUnits } = state.storagedProduct

  return (
    <div className="card">
      <HowLongInfo />
      {nextToExpireUnits ? (
        <>
          <ExpiringNextInfo />
          <SeeDetails name={name} />
        </>
      ) : null}
    </div>
  )
}

export default ProductInfo
