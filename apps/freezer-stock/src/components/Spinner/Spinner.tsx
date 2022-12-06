import CircularProgress from "@mui/material/CircularProgress"
import { PropsWithChildren } from "react"
import styles from "./Spinner.module.scss"

type SpinnerProps = PropsWithChildren & {
  show: boolean
}

const Spinner = ({ show, children }: SpinnerProps) => {
  return (
    <>
      {show ? (
        <div className={styles["centered"]}>
          <CircularProgress />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Spinner
