import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from "./components/header/header.component.jsx"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
