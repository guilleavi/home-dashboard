import Link from "next/link"
import { PropsWithChildren } from "react"
import styles from "./ShowDetailsLink.module.css"

interface ShowDetailsLinkProps extends PropsWithChildren {
  slug: string
}

const ShowDetailsLink = ({ slug, children }: ShowDetailsLinkProps) => (
  <div className={styles["link-container"]}>
    <Link className="navigation-link" href={`/details/${slug}`}>
      {children}
    </Link>
  </div>
)

export default ShowDetailsLink
