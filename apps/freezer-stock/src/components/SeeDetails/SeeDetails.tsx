import Link from "next/link"
import styles from "./SeeDetails.module.scss"

const SeeDetails = ({ name }: { name?: string }) => {
  return (
    <section className="">
      <Link href={`/details/${name}`}>
        <a className={styles["details-link"]}>See Stock Details</a>
      </Link>
    </section>
  )
}

export default SeeDetails
