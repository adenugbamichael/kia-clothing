const SHOP_DATA = {
  womens: {
    id: 1,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 1,
        name: "Blue Tanktop",
        imageUrl:
          "https://i.pinimg.com/564x/11/94/35/119435243c34954f9b7080548c932e44.jpg",
        price: 25,
      },
      {
        id: 2,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 20,
      },
      {
        id: 3,
        name: "Floral Dress",
        imageUrl:
          "https://i.pinimg.com/564x/a7/88/cc/a788cc5eaa9b7531c89225f42d07c880.jpg",
        price: 80,
      },
      {
        id: 4,
        name: "Red Dots Dress",
        imageUrl:
          "https://i.pinimg.com/564x/5f/a0/c3/5fa0c3d429f3a4a43b8e5fee90c076d8.jpg",
        price: 80,
      },
      {
        id: 5,
        name: "Striped Sweater",
        imageUrl:
          "https://i.pinimg.com/564x/09/e1/01/09e10177a7a236f8c89a0c6b8691a011.jpg",
        price: 45,
      },
      {
        id: 6,
        name: "Yellow Track Suit",
        imageUrl:
          "https://i.pinimg.com/564x/33/f7/34/33f734eb6d091ad5c21c2d479665aad6.jpg",
        price: 135,
      },
      {
        id: 7,
        name: "White Blouse",
        imageUrl:
          "https://i.pinimg.com/564x/f7/9c/be/f79cbe8e0bbf434c5a69956d4f616cf2.jpg",
        price: 20,
      },
    ],
  },
  mens: {
    id: 2,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 8,
        name: "Camo Down Vest",
        imageUrl:
          "https://i.pinimg.com/564x/90/bf/69/90bf69b31c9dddddaeaf874aec2a66a0.jpg",
        price: 325,
      },
      {
        id: 9,
        name: "Floral T-shirt",
        imageUrl:
          "https://i.pinimg.com/564x/9b/bb/19/9bbb1956479baca3fe6f448db64e9ea2.jpg",
        price: 20,
      },
      {
        id: 10,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://i.pinimg.com/564x/51/b8/4c/51b84ccaaafb35a541db9d590a037a78.jpg",
        price: 25,
      },
      {
        id: 11,
        name: "Pink T-shirt",
        imageUrl:
          "https://i.pinimg.com/564x/11/ee/2a/11ee2afc6135b0e0c0af727bee8f4eca.jpg",
        price: 25,
      },
      {
        id: 12,
        name: "Jean Long Sleeve",
        imageUrl:
          "https://i.pinimg.com/564x/1b/33/ae/1b33aee69f91012a140fdd7f64b28e6e.jpg",
        price: 40,
      },
      {
        id: 13,
        name: "Burgundy T-shirt",
        imageUrl:
          "https://i.pinimg.com/564x/86/d5/89/86d589e9acea9cebce22343f7e957120.jpg",
        price: 25,
      },
    ],
  },
  kids: {
    id: 3,
    title: "Kids",
    routeName: "kids",
    items: [
      {
        id: 14,
        name: "Camo Down",
        imageUrl:
          "https://i.pinimg.com/564x/d4/47/90/d44790356422105ac06988ae6ae9a5e7.jpg",
        price: 325,
      },
      {
        id: 15,
        name: "Floral T-shirt",
        imageUrl:
          "https://i.pinimg.com/564x/07/8b/27/078b27f48c15829e8ddc07becc837740.jpg",
        price: 20,
      },
      {
        id: 16,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://i.pinimg.com/564x/65/4e/4e/654e4e56dcf97d74f0a80e0a2de0beaf.jpg",
        price: 25,
      },

      {
        id: 17,
        name: "Pink T-shirt",
        imageUrl:
          "https://i.pinimg.com/236x/2d/d6/58/2dd658706b62a30a7cfa43b829b816ea.jpg",

        price: 25,
      },
      {
        id: 18,
        name: "Jean Long Sleeve",
        imageUrl:
          "https://i.pinimg.com/236x/dd/48/db/dd48dbc3aefd098a4780ebbde22b7f56.jpg",
        price: 40,
      },
      {
        id: 19,
        name: "Burgundy T-shirt",
        imageUrl:
          "https://i.pinimg.com/564x/0f/ba/9a/0fba9a525b3f76d5b2864da3d16c552a.jpg",
        price: 25,
      },
    ],
  },
  hats: {
    id: 4,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 20,
        name: "Brown Brim",
        imageUrl:
          "https://i.pinimg.com/564x/43/e4/d4/43e4d4f035a645f23948f914c3cb7cad.jpg",
        price: 25,
      },
      {
        id: 21,
        name: "Blue Beanie",
        imageUrl:
          "https://i.pinimg.com/564x/2c/9f/4f/2c9f4fee608e25cd8ed17892aafc305b.jpg",
        price: 18,
      },
      {
        id: 22,
        name: "Brown Cowboy",
        imageUrl:
          "https://i.pinimg.com/564x/f0/7c/1c/f07c1ca60b02b76c0b34f219979257b2.jpg",
        price: 35,
      },
      {
        id: 23,
        name: "Grey Brim",
        imageUrl:
          "https://i.pinimg.com/564x/9a/1a/10/9a1a10ade59a740704f4f1e27261e82f.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Green Beanie",
        imageUrl:
          "https://i.pinimg.com/564x/c8/6e/7b/c86e7b4974e3e0d681a5e168e67265ad.jpg",
        price: 18,
      },
      {
        id: 25,
        name: "Palm Tree Cap",
        imageUrl:
          "https://i.pinimg.com/564x/50/51/71/5051718a199281ef2ffdad36ad18d8dd.jpg",
        price: 14,
      },
      {
        id: 26,
        name: "Brown Beanie",
        imageUrl:
          "https://i.pinimg.com/564x/05/03/73/050373ff67c6268eda686b9a753d01d4.jpg",
        price: 18,
      },
      {
        id: 27,
        name: "Wolf Cap",
        imageUrl:
          "https://i.pinimg.com/564x/0d/13/d7/0d13d7347fd9242e611b3717caf121a4.jpg",
        price: 14,
      },
      {
        id: 28,
        name: "Brown Snapback",
        imageUrl:
          "https://i.pinimg.com/564x/b6/41/60/b6416017fc4b3af939c873530bb737ab.jpg",
        price: 16,
      },
    ],
  },

  jackets: {
    id: 5,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 29,
        name: "Black Jean Shearling",
        imageUrl:
          "https://i.pinimg.com/564x/2d/85/12/2d8512c22c369b164b43e5b7b33d9c88.jpg",
        price: 125,
      },
      {
        id: 30,
        name: "Blue Jean Jacket",
        imageUrl:
          "https://i.pinimg.com/564x/08/02/b3/0802b3ed3be446266d89462fd83a4ec0.jpg",
        price: 90,
      },
      {
        id: 31,
        name: "Grey Jean Jacket",
        imageUrl:
          "https://i.pinimg.com/564x/58/da/bd/58dabd4f3cea0bf30eec3b3771268724.jpg",
        price: 90,
      },
      {
        id: 32,
        name: "Brown Shearling",
        imageUrl:
          "https://i.pinimg.com/564x/b8/d7/c9/b8d7c9a7d7126c85b4c7ff77111af38c.jpg",
        price: 165,
      },
      {
        id: 33,
        name: "Tan Trench",
        imageUrl:
          "https://i.pinimg.com/564x/53/6d/f1/536df10a7d394a103498c1011c27ea59.jpg",
        price: 185,
      },
    ],
  },
  sneakers: {
    id: 6,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 34,
        name: "Adidas NMD",
        imageUrl:
          "https://i.pinimg.com/564x/17/af/ca/17afcade89a0a9fe538e7bca3870d92e.jpg",
        price: 220,
      },
      {
        id: 35,
        name: "Adidas Yeezy",
        imageUrl:
          "https://i.pinimg.com/564x/f7/9a/ff/f79aff613c8785500674fd2d458fbd4d.jpg",
        price: 280,
      },
      {
        id: 36,
        name: "Black Converse",
        imageUrl:
          "https://i.pinimg.com/564x/57/75/bc/5775bc207f8a7a9ec1c798598f11a408.jpg",
        price: 110,
      },
      {
        id: 37,
        name: "Nike White AirForce",
        imageUrl:
          "https://i.pinimg.com/564x/14/e6/22/14e6221e1aa1c8c0887dd6dba237ad54.jpg",
        price: 160,
      },
      {
        id: 38,
        name: "Nike Red High Tops",
        imageUrl:
          "https://i.pinimg.com/564x/b5/9d/44/b59d442680705fbcb79cbadad55fc985.jpg",
        price: 160,
      },
      {
        id: 39,
        name: "Brown High Toms",
        imageUrl:
          "https://i.pinimg.com/564x/4b/28/79/4b2879ae94cd1f5e26cfc1336a694411.jpg",
        price: 160,
      },
      {
        id: 40,
        name: "Air Jordan Limited",
        imageUrl:
          "https://i.pinimg.com/564x/c8/53/0c/c8530c38e908dca5e1a6141b894c818a.jpg",
        price: 190,
      },
      {
        id: 41,
        name: "Timberlands",
        imageUrl:
          "https://i.pinimg.com/564x/ab/4f/66/ab4f66cdec9c63acb448345d38845d3c.jpg",
        price: 200,
      },
    ],
  },
}

export default SHOP_DATA
