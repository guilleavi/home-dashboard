import { useAppSelector } from "@store/hooks"
import { useState } from "react"
import styles from "./ProductActions.module.css"
import { toPascalCase } from "@utils/strings"

enum ProductAction {
  NULL = "null",
  EAT = "eat",
  ADD = "add",
}

const ProductActions = () => {
  const { storagedProduct } = useAppSelector((state) => state.product)
  const { name } = storagedProduct

  const [selectedAction, setSelectedAction] = useState<ProductAction>(
    ProductAction.NULL,
  )

  return (
    <section className="block-container">
      <h2 className={styles["title"]} id="product-actions-title">
        {toPascalCase(name)}
      </h2>

      {selectedAction === ProductAction.NULL ? (
        <menu
          className={styles["menu"]}
          role="menu"
          aria-labelledby="product-actions-title"
        >
          <li>
            <button
              type="button"
              role="menuitem"
              onClick={() => setSelectedAction(ProductAction.EAT)}
            >
              Eat
            </button>
          </li>
          <li>
            <button
              type="button"
              role="menuitem"
              onClick={() => setSelectedAction(ProductAction.ADD)}
            >
              Add
            </button>
          </li>
        </menu>
      ) : null}

      {selectedAction === ProductAction.EAT ? <div>EAT</div> : null}

      {selectedAction === ProductAction.ADD ? <div>ADD</div> : null}
    </section>
  )
}

export default ProductActions
