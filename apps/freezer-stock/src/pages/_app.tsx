import { ProductProvider } from "@contexts/ProductProvider"
import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/index.scss"

const FreezerStockApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="description" content="Freezer stock" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  </>
)

export default FreezerStockApp
