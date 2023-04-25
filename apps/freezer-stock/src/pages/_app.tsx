import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
import "../styles/index.scss"
import { ProductProvider } from "@contexts/ProductProvider"

// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
//   console.log(metric)
// }

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

// TODO: general todo, add unit and integration tests
// TODO: add Jest, React Testing Library and Cypress
// TODO: add storybook
// TODO: accessibility
// TODO: create 404/500 pages
