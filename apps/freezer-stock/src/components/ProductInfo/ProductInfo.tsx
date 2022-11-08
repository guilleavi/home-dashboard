import ExpiringNextInfo from "@components/ExpiringNextInfo/ExpiringNextInfo"
import HowLongInfo from "@components/HowLongInfo/HowLongInfo"
import { ProductContext } from "@contexts/ProductProvider"
import { useContext } from "react"
import styles from "./ProductInfo.module.scss"

const ProductInfo = () => {
  const {
    state: {
      storagedProduct: { nextToExpireUnits },
    },
  } = useContext(ProductContext)

  return (
    <section className={styles["card"]}>
      <HowLongInfo />
      {nextToExpireUnits ? <ExpiringNextInfo /> : null}
    </section>
  )
}

export default ProductInfo
