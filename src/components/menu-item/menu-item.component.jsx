import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  const navigate = useNavigate()
  // destructured "pathname" property from useLocation()
  const { pathname } = useLocation()
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${pathname}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})`, height: "380px" }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        {/* <span className='subtitle'></span> */}
      </div>
    </div>
  )
}
export default MenuItem
