import React from "react"

import MenuItem2 from "../menu-item2/menu-item2.component"

import "./directory2.styles.scss"

class Directory2 extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://media.istockphoto.com/photos/millinery-shop-picture-id1078144480?k=20&m=1078144480&s=612x612&w=0&h=DHXa6RIdNdGb738d0Dfq33sN4SMVFoujePXYK8HVA5w=",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://media.istockphoto.com/photos/men-clothing-in-a-store-in-milan-picture-id909176510?k=20&m=909176510&s=612x612&w=0&h=gauXY8q38cT-vLTSX8Skb8ahlnGjvJR5TcxRrvNMzaw=",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://media.istockphoto.com/photos/assortment-of-comfortable-casual-sports-shoes-on-showcase-in-store-picture-id1359206288?k=20&m=1359206288&s=612x612&w=0&h=lqUaVzNyCZaQVX__rBAxfLjd37Ji0gbg3GeDm-ztKuY=",
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
          <MenuItem2 key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory2
