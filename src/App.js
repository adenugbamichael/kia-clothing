import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import "./App.css"

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import CheckoutPage from "./pages/checkout/checkout.component"

import Header from "./components/header/header.component"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"

class App extends React.Component {
  unscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/shop/*' element={<ShopPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
          <Route
            exact
            path='/signin'
            element={
              this.props.currentUser ? (
                <Navigate to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route
            path='/signin'
            element={
              this.props.user ? <Navigate to='/' /> : <SignInAndSignUpPage />
            }
          />
        </Routes>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
