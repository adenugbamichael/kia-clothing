import React from "react"

import MenuItem from "../menu-item/menu-item.component"

import "./directory.styles.scss"

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: "womens",
          imageUrl:
            "https://images.pexels.com/photos/3008283/pexels-photo-3008283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          size: "large",
          id: 1,
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl:
            "https://i.pinimg.com/564x/5d/2f/07/5d2f07a955aa806cdc548028338964a8.jpg",
          size: "large",
          id: 2,
          linkUrl: "",
        },
        {
          title: "kids",
          imageUrl:
            "https://i.pinimg.com/564x/da/4e/4e/da4e4e80baa3efb824f192e1faf60d93.jpg",
          size: "large",
          id: 3,
          linkUrl: "",
        },
      ],
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory
