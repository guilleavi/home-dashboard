// https://dnlytras.com/snippets/adding-delay-in-dev
// Sample:
/*
getAllProductDetails().then((result) => {
  sleep().then(() => {
    setInstances(result)

    setShowSpinner(false)
  })
})
 */
export const sleep = (ms = 2000): Promise<void> => {
  console.log("Kindly remember to remove `sleep`")
  return new Promise((resolve) => setTimeout(resolve, ms))
}
