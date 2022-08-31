import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "ui/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>This is the dashboard</h1>
      <h2>The next button comes from a shared package</h2>
      <Button />
    </div>
  );
}

export default App;
