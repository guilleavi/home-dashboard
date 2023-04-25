import Head from "next/head"
import { PropsWithChildren } from "react"
import styles from "./PageContainer.module.scss"

type PageContainerProps = PropsWithChildren & {
  htmlTitle?: string
  pageTitle: string
}

const PageContainer = ({
  htmlTitle = "",
  pageTitle,
  children,
}: PageContainerProps) => (
  <>
    <Head>
      <title>{htmlTitle || pageTitle}</title>
    </Head>
    <header>
      <h1>{pageTitle}</h1>
    </header>
    <main className={styles["page-container"]}>{children}</main>
  </>
)

export default PageContainer
