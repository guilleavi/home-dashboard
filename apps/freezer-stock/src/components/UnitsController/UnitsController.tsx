import { ProductContext } from "contexts/ProductProvider"
import { useContext } from "react"
import { ProductActionType } from "types/state"
import styles from "./UnitsController.module.scss"

const UnitsController = () => {
  const {
    state: {
      newProductItem: { units = 0 },
    },
    dispatch,
  } = useContext(ProductContext)

  const handleUpdateQuatity = (add: number) => {
    let newQuantity = units + add
    newQuantity = newQuantity < 0 ? 0 : newQuantity
    dispatch({
      type: ProductActionType.UPDATE_PRODUCT,
      payload: { key: "units", value: newQuantity },
    })
  }

  return (
    <section className={styles["controllers"]}>
      <button
        className={styles["button"]}
        type="button"
        onClick={() => handleUpdateQuatity(-1)}
      >
        -
      </button>
      <p className={styles["label"]}>{units}</p>
      <button
        className={styles["button"]}
        type="button"
        onClick={() => handleUpdateQuatity(1)}
      >
        +
      </button>
    </section>
  )
}

export default UnitsController
