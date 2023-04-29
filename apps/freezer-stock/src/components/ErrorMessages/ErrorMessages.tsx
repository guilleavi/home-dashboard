import { useAppSelector } from "@store/hooks"
import styles from "./ErrorMessages.module.css"

const ErrorMessages = () => {
  const { errors } = useAppSelector((state) => state.product)

  if (!errors.length) {
    return null
  }

  return (
    <div className="block-container">
      {errors.map((error, index) => (
        <p key={index} className={styles["error-message"]}>
          {error}
        </p>
      ))}
    </div>
  )
}

export default ErrorMessages
