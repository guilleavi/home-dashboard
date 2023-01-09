import Link from "next/link"
import { PropsWithChildren } from "react"
import styles from "./ShowDetailsLink.module.scss"

type ShowDetailsLinkProps = PropsWithChildren & {
  slug: string
}

const ShowDetailsLink = ({ slug, children }: ShowDetailsLinkProps) => (
  <div className={styles["link-wrapper"]}>
    <Link href={`/details/${slug}`}>
      {/* TODO: add passHref, it should be detected by the ESLint but it's not working. Fix lint */}
      <a className={styles["link"]}>{children}</a>
    </Link>
  </div>
)

export default ShowDetailsLink
