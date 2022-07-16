import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./pages/homepage/homepage.component"

const HatsPage = () => {
  console.log()
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/hats' element={<HatsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
