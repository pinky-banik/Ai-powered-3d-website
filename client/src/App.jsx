
import { useState } from "react"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import CanvasModal from "./canvas"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <main className="app transition-all ease-in">
        <Home/>
        <CanvasModal/>
        <Customizer/>
      </main>
    </div>
  )
}

export default App
