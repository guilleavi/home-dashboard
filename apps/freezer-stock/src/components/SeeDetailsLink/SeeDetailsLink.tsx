import Link from "next/link"
import styles from "./SeeDetailsLink.module.scss"

type SeeDetailsProps = {
  name: string
}

const SeeDetails = ({ name }: SeeDetailsProps) => (
  <div className={styles["details-link"]}>
    <Link href={`/details/${name}`}>
      {name === "all" ? "See All Products" : "See Details"}
    </Link>
  </div>
)

export default SeeDetails
