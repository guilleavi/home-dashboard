import MonthsToFreeze from "@components/MonthsToFreeze/MonthsToFreeze"
import NextToExpire from "@components/NextToExpire/NextToExpire"
import SaveButton from "@components/SaveButton/SaveButton"
import SearchInput from "@components/SearchInput/SearchInput"
import ShowDetailsLink from "@components/ShowDetailsLink/ShowDetailsLink"
import Spinner from "@components/Spinner/Spinner"
import StorageDate from "@components/StorageDate/StorageDate"
import UnitsController from "@components/UnitsController/UnitsController"
import CardContainer from "@containers/CardContainer/CardContainer"
import PageContainer from "@containers/PageContainer/PageContainer"
import { ProductContext } from "@contexts/ProductProvider"
import { toPascalCase } from "@utils/strings"
import { useContext, useState } from "react"

const HomePage = () => {
  const [showSpinner, setShowSpinner] = useState(false)

  const { state } = useContext(ProductContext)
  const { name, nextToExpireUnits } = state.storagedProduct

  // TODO: can I replace the spinner logic with the useTransition hook ???
  return (
    <PageContainer pageTitle={"Freezer Stock"}>
      <ShowDetailsLink slug="all">Show All Products</ShowDetailsLink>
      <SearchInput onShowSpinner={(show) => setShowSpinner(show)} />
      <Spinner isActive={showSpinner}>
        {name ? (
          <>
            <CardContainer title={toPascalCase(name)}>
              <MonthsToFreeze />
              {nextToExpireUnits ? (
                <>
                  <NextToExpire />
                  <ShowDetailsLink slug={name}>Show Details</ShowDetailsLink>
                </>
              ) : null}
            </CardContainer>
            <StorageDate />
            <UnitsController />
            <SaveButton onShowSpinner={(show) => setShowSpinner(show)} />
          </>
        ) : null}
      </Spinner>
    </PageContainer>
  )
}

export default HomePage
