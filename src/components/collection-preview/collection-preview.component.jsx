import React from "react"
import ColleectionItem from "../collection-item/collection-item.component"

import "./collection-preview.styles.scss"

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h2 className='title'>{title}</h2>
    <div className='preview'>
      {items
        .filter((item, idk) => idk < 4)
        .map(({ id, ...otherItemProps }) => (
          <ColleectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
)
export default CollectionPreview
