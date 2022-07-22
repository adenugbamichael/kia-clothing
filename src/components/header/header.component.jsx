import React from "react"
import { Link } from "react-router-dom"
import SearchBox from "../searchbox/searchbox.component"
import { connect } from "react-redux"
import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { ReactComponent as Logo } from "../../assets/ki.svg"
import "./header.styles.scss"

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
      <SearchBox />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/shop'>
        Contact
      </Link>
      {currentUser ? (
        <div
          className='option'
          onClick={() => auth.signOut()}
          style={{ backgroundColor: "#0a2237", color: "white" }}
        >
          Sign Out
        </div>
      ) : (
        <Link
          className='option'
          to='/signin'
          style={{ backgroundColor: "#0a2237", color: "white" }}
        >
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
})

export default connect(mapStateToProps)(Header)
