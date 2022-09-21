import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ProductProvider } from "contexts/ProductProvider"

const FreezerStockApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>Freezer stock</title>
      <meta name="description" content="Freezer stock" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  </div>
)

export default FreezerStockApp
