import ErrorMessages from "@components/ErrorMessages/ErrorMessages"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import Spinner from "@components/Spinner/Spinner"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import PageContainer from "@containers/PageContainer/PageContainer"
import ProductActions from "@components/ProductActions/ProductActions"
import { useAppSelector } from "@store/hooks"
import { toPascalCase } from "@utils/strings"
import { useCallback, useState } from "react"

const HomePage = () => {
  const [showSpinner, setShowSpinner] = useState(false)

  const { storagedProduct } = useAppSelector((state) => state.product)
  const { name, nextToExpireUnits } = storagedProduct

  /* useCallback avoids SearchInput rerender */
  const handleShowSpinner = useCallback((show: boolean) => {
    setShowSpinner(show)
  }, [])

  // TODO: can I replace the spinner logic with the useTransition hook ???
  return (
    <PageContainer pageTitle={"Freezer Stock"}>
      <ShowDetailsLink slug="all">Show All Products</ShowDetailsLink>
      <SearchInput onShowSpinner={handleShowSpinner} />
      <Spinner isActive={showSpinner}>
        {name ? (
          <>
            {/* <CardContainer title={toPascalCase(name)}>
              <MonthsToFreeze />
              {nextToExpireUnits ? (
                <>
                  <NextToExpire />
                  <ShowDetailsLink slug={name}>Show Details</ShowDetailsLink>
                </>
              ) : null}
            </CardContainer> */}
            <ProductActions />
            <StorageDate />
            <UnitsController />
            <SaveButton onShowSpinner={(show) => setShowSpinner(show)} />
            <ErrorMessages />
          </>
        ) : null}
      </Spinner>
    </PageContainer>
  )
}

export default HomePage
