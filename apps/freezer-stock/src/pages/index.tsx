import ProductContainer from "components/ProductContainer/ProductContainer"
import SearchInput from "components/SearchInput/SearchInput"

const HomePage = () => {
  return (
    <>
      <h1>Freezer Stock</h1>
      <SearchInput />
      <ProductContainer />
      {/* TODO: add see all button to see the full stock */}
    </>
  )
}

export default HomePage
