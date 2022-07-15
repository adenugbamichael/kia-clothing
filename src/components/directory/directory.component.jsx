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
            "https://images.pexels.com/photos/4297163/pexels-photo-4297163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          size: "large",
          id: 2,
          linkUrl: "",
        },
        {
          title: "kids",
          imageUrl:
            "https://i.pinimg.com/564x/3e/90/d7/3e90d74bc5a42f174f9248928cb26c33.jpg",
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
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory
