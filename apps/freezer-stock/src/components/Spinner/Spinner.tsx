import CircularProgress from "@mui/material/CircularProgress"
import { PropsWithChildren } from "react"
import styles from "./Spinner.module.scss"

interface SpinnerProps extends PropsWithChildren {
  isActive: boolean
}

const Spinner = ({ isActive, children }: SpinnerProps) =>
  isActive ? (
    <div className={styles["centered"]}>
      <CircularProgress />
    </div>
  ) : (
    /* The children can be several HTML elements so they have to be wrapped inside a React Fragment */
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  )

export default Spinner
