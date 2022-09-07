import "./App.css"
import { Button } from "ui/Button"

console.log('-in app.tsx');
const App = () => (
  
  <div className="App">
    <h1>This is the dashboard</h1>
    <h2>The next button comes from a shared package</h2>
    <Button />
  </div>
)

export default App
