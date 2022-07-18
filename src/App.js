import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import Header from "./components/header/header.component"
import { auth } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }

  unscribeFromAuth = null

  componentDidMount() {
    this.unscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
