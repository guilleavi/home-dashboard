import { ProductContext } from "@contexts/ProductProvider"
import { useContext } from "react"
import styles from "./ErrorMessages.module.scss"

const ErrorMessages = () => {
  const { state } = useContext(ProductContext)

  return (
    <div className="block-container">
      {
        state.errors.map((error, index) =>
          <p key={index} className={styles["error-message"]}>{error}</p>
        )
      }
    </div>
  )


}

export default ErrorMessages