import React from "react"
import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
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

export default MenuItem