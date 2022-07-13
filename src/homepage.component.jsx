import React from "react"
import "./homepage.styles.scss"

const Homepage = () => (
  <div className='homepage'>
    <span className='section-title'>
      <strong>SHOP BY CATEGORY</strong>
    </span>
    <div className='directory-menu'>
      <div className='menu-item-section'>
        <div className='content'>
          <h1 className='title'>womens</h1>
          {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
      </div>
      <div className='menu-item-section'>
        <div className='content'>
          <h1 className='title'>mens</h1>
          {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
      </div>
      <div className='menu-item-section'>
        <div className='content'>
          <h1 className='title'>kids</h1>
          {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
      </div>
    </div>

    {/* 
      <span className='section-title'>
        <strong>SHOP BY CATEGORY</strong>
      </span>
     */}
    <span className='section-title'>
      <strong>POPULAR ITEMS</strong>
    </span>
    {/* 
      <span className='section-title'>
        <strong>SHOP BY CATEGORY</strong>
      </span>
     */}

    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>hats</h1>
          {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>sneakers</h1>
          {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>jackets</h1>
          {/* <span className='subtitle'>SHOP NOW</span> */}
        </div>
      </div>
    </div>
  </div>
)

export default Homepage
