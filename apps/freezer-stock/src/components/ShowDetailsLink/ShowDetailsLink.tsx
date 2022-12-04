import Link from "next/link"
import { PropsWithChildren } from "react"
import styles from "./ShowDetailsLink.module.scss"

type ShowDetailsLinkProps = PropsWithChildren & {
  slug: string
}

const ShowDetailsLink = ({ slug, children }: ShowDetailsLinkProps) => (
  <div className={styles["link-wrapper"]}>
    <Link href={`/details/${slug}`}>
      <a className={styles["link"]}>{children}</a>
    </Link>
  </div>
)

export default ShowDetailsLink
