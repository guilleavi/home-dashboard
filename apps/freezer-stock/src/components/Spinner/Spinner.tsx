import CircularProgress from "@mui/material/CircularProgress"
import { PropsWithChildren } from "react"
import styles from "./Spinner.module.scss"

type SpinnerProps = PropsWithChildren & {
  isActive: boolean
}

const Spinner = ({ isActive, children }: SpinnerProps) =>
  isActive ? (
    <div className={styles["centered"]}>
      <CircularProgress />
    </div>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  )

export default Spinner
