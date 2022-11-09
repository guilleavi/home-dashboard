import Link from "next/link"
import styles from "./SeeDetailsLink.module.scss"

type SeeDetailsProps = {
  name: string
}

const SeeDetails = ({ name }: SeeDetailsProps) => (
  <Link href={`/details/${name}`}>
    <a className={styles["details-link"]}>
      {name === "all" ? "See All Products" : "See Details"}
    </a>
  </Link>
)

export default SeeDetails
