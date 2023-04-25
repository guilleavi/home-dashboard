import Link from "next/link"
import { PropsWithChildren } from "react"
import styles from "./ShowDetailsLink.module.scss"

type ShowDetailsLinkProps = PropsWithChildren & {
  slug: string
}

const ShowDetailsLink = ({ slug, children }: ShowDetailsLinkProps) => (
  // TODO: check if I can remove the div, now it is only there to add css
  <div className={styles["link-wrapper"]}>
    <Link className={styles["link"]} href={`/details/${slug}`}>
      {children}
    </Link>
  </div>
)

export default ShowDetailsLink
