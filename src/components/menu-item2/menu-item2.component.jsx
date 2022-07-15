import React from "react"
import "./menu-item2.styles.scss"

const MenuItem2 = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content2'>
      <h1 className='title'>{title}</h1>
      {/* <span className='subtitle'></span> */}
    </div>
  </div>
)

export default MenuItem2
