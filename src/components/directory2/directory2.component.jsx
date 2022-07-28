import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { selectDirectorySections } from "../../redux/directory/directory.selectors"

import MenuItem2 from "../menu-item2/menu-item2.component"

import "./directory2.styles.scss"

const Directory2 = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem2 key={id} {...otherSectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory2)
