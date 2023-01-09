import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/index.scss"

// TODO: add report web vitals nextjs

const FreezerStockApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="description" content="Freezer stock" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default FreezerStockApp

// TODO: general todo, add unit and integration tests
