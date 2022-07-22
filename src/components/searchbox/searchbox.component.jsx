import React from "react"

import "./searchbox.styles.scss"

const SearchBox = () => {
  return (
    <div className='searchbox'>
      <input className='search-item' type='search' placeholder='search items' />
    </div>
  )
}

export default SearchBox
