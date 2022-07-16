import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./menu-item2.styles.scss"

const MenuItem2 = ({ title, imageUrl, size, linkUrl, match }) => {
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
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content2'>
        <h1 className='title'>{title}</h1>
        {/* <span className='subtitle'></span> */}
      </div>
    </div>
  )
}

export default MenuItem2
