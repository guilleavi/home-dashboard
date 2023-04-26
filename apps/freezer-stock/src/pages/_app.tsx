import { ProductProvider } from "@contexts/ProductProvider"
import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/index.css"

const FreezerStockApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="description" content="Freezer stock" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/fonts/open-sans-300.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/open-sans-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/open-sans-400i.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/open-sans-600.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/open-sans-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  </>
)

export default FreezerStockApp
