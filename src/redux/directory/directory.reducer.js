const INITIAL_STATE = {
  sections: [
    {
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/3008283/pexels-photo-3008283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      size: "large",
      id: 1,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://i.pinimg.com/564x/5d/2f/07/5d2f07a955aa806cdc548028338964a8.jpg",
      size: "large",
      id: 2,
      linkUrl: "shop/mens",
    },
    {
      title: "kids",
      imageUrl:
        "https://i.pinimg.com/564x/da/4e/4e/da4e4e80baa3efb824f192e1faf60d93.jpg",
      size: "large",
      id: 3,
      linkUrl: "shop/kids",
    },
    {
      title: "hats",
      imageUrl:
        "https://media.istockphoto.com/photos/millinery-shop-picture-id1078144480?k=20&m=1078144480&s=612x612&w=0&h=DHXa6RIdNdGb738d0Dfq33sN4SMVFoujePXYK8HVA5w=",
      id: 4,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://media.istockphoto.com/photos/men-clothing-in-a-store-in-milan-picture-id909176510?k=20&m=909176510&s=612x612&w=0&h=gauXY8q38cT-vLTSX8Skb8ahlnGjvJR5TcxRrvNMzaw=",
      id: 5,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://media.istockphoto.com/photos/assortment-of-comfortable-casual-sports-shoes-on-showcase-in-store-picture-id1359206288?k=20&m=1359206288&s=612x612&w=0&h=lqUaVzNyCZaQVX__rBAxfLjd37Ji0gbg3GeDm-ztKuY=",
      id: 6,
      linkUrl: "shop/sneakers",
    },
  ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
