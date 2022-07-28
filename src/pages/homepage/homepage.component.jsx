import React from "react"
import Directory from "../../components/directory/directory.component"
import "./homepage.styles.scss"

const Homepage = () => (
  <div className='homepage'>
    <h2 className='toph'>Shop By Category</h2>
    <Directory />
    <h2 className='bottomh'>Popular Items</h2>
  </div>
)

export default Homepage

// import Directory2 from "../../components/directory2/directory2.component"
/* <Directory2 /> */
