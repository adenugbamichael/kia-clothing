import React from "react"

import "./searchbox.styles.scss"

const SearchBox = () => {
  return (
    <div className='searchbox'>
      <input
        className='search-input'
        type='search'
        placeholder='search items'
      />
    </div>
  )
}

export default SearchBox
