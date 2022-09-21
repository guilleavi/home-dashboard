import ExpiringNextInfo from "components/ExpiringNextInfo/ExpiringNextInfo"
import HowLongInfo from "components/HowLongInfo/HowLongInfo"
import { ProductContext } from "contexts/ProductProvider"
import Link from "next/link"
import { useContext } from "react"

const FrozenProductInfo = () => {
  const {
    state: {
      storagedProduct: { name, nextToExpireUnits },
    },
  } = useContext(ProductContext)

  // TODO: remove inline style, I added just to make this card easier to see
  return (
    <div style={{ border: "1px solid gray", padding: "5px" }}>
      <h2>{name}</h2>
      <HowLongInfo />
      {nextToExpireUnits ? (
        <>
          <ExpiringNextInfo />
          <Link href="/details">See Stock Details</Link>{" "}
        </>
      ) : null}
    </div>
  )
}

export default FrozenProductInfo
