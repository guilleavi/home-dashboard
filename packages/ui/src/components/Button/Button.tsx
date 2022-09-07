export const Button = () => {
  const handleOnClick = () => {
    console.log("boo ooping the snoot!!--> ")
  }
  return (
    <button type="button" onClick={handleOnClick}>
      Boop the snoot🐶.
    </button>
  )
}
