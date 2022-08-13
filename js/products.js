/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "RS21",
    title: "Evermore",
    description: "Artist: Taylor Swift, Release: Dec 11 2020, Available in: Vinyl",
    price: "39.98",
    discontinued: false,
    imageUrl: "./images/products/RS21.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS22",
    title: "Folklore",
    description: "Artist: Taylor Swift, Release: Jul 24 2020, Available in: Vinyl",
    price: "43.98",
    discontinued: false,
    imageUrl: "./images/products/RS22.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS23",
    title: "Heiress",
    description: "Artist: Novo Amor and Ed Tullett, Release: Nov 10 2017, Available in: Vinyl",
    price: "31.99",
    discontinued: false,
    imageUrl: "./images/products/RS23.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS24",
    title: "Ruby Sparks",
    description: "Artist: Monet Ngo, Release: 2022, Available in: CD",
    price: "19.99",
    discontinued: false,
    imageUrl: "./images/products/RS24.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS25",
    title: "Red (Taylor's Version)",
    description: "Artist: Taylor Swift, Release: Nov 12 2021, Available in: Vinyl",
    price: "36.56",
    discontinued: false,
    imageUrl: "./images/products/RS25.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS26",
    title: "AM",
    description: "Artist: Arctic Monkeys, Release: Aug 1 2013, Available in: Vinyl",
    price: "31.33",
    discontinued: false,
    imageUrl: "./images/products/RS26.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS27",
    title: "Bright Lights, Red Eyes",
    description: "Artist: Ruel, Release: 2020, Available in: Vinyl",
    price: "30.72",
    discontinued: false,
    imageUrl: "./images/products/RS27.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS28",
    title: "Vide Noir",
    description: "Artist: Lord Huron, Release: Apr 20 2018, Available in: Vinyl",
    price: "33.98",
    discontinued: false,
    imageUrl: "./images/products/RS28.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS29",
    title: "Lust for Life",
    description: "Artist: Lana Del Rey, Release: 2017, Available in: Vinyl",
    price: "52.99",
    discontinued: false,
    imageUrl: "./images/products/RS29.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS30",
    title: "Fine Line",
    description: "Artist: Harry Styles, Release: Dec 13 2019, Available in: Vinyl",
    price: "49.99",
    discontinued: false,
    imageUrl: "./images/products/RS30.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS31",
    title: "Strange Trails",
    description: "Artist: Lord Huron, Release: Apr 7 2015, Available in: Vinyl",
    price: "39.99",
    discontinued: false,
    imageUrl: "./images/products/RS31.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS32",
    title: "Favourite Worst Nightmare",
    description: "Artist: Arctic Monkeys, Release: Apr 18 2007, Available in: Vinyl",
    price: "31.12",
    discontinued: false,
    imageUrl: "./images/products/RS32.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS33",
    title: "Nothing Happens",
    description: "Artist: Wallows, Release: March 22 2019, Available in: CD",
    price: "31.33",
    discontinued: false,
    imageUrl: "./images/products/RS33.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS34",
    title: "Social Cues",
    description: "Artist: Cage the Elephant, Release: Apr 19 2019, Available in: Vinyl",
    price: "35.68",
    discontinued: false,
    imageUrl: "./images/products/RS34.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS35",
    title: "Paradise EP",
    description: "Artist: Chase Atlantic, Release: 2016, Available in: CD",
    price: "19.98",
    discontinued: true,
    imageUrl: "./images/products/RS35.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS36",
    title: "Born to Die",
    description: "Artist: Lana Del Rey, Release: 2017, Available in: Vinyl",
    price: "35.98",
    discontinued: false,
    imageUrl: "./images/products/RS36.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS37",
    title: "Uncomfortable",
    description: "Artist: Wallows, Release: 2017, Available in: CD",
    price: "21.99",
    discontinued: true,
    imageUrl: "./images/products/RS37.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS38",
    title: "Dreamland",
    description: "Artist: Glass Animals, Release: 7 Aug 2020, Available in: Vinyl",
    price: "32.98",
    discontinued: false,
    imageUrl: "./images/products/RS38.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS39",
    title: "NFR",
    description: "Artist: Lana Del Rey, Release: 2017, Available in: Vinyl",
    price: "45.99",
    discontinued: false,
    imageUrl: "./images/products/RS39.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS40",
    title: "The Slow Rush",
    description: "Artist: Tame Impala, Release: Feb 14 2020, Available in: Vinyl",
    price: "37.68",
    discontinued: false,
    imageUrl: "./images/products/RS40.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS41",
    title: "Ultraviolence",
    description: "Artist: Lana Del Rey, Release: Jun 13 2014, Available in: Vinyl",
    price: "31.68",
    discontinued: false,
    imageUrl: "./images/products/RS41.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS42",
    title: "Superache",
    description: "Artist: Conan Gray, Release: Jun 24 2022, Available in: Vinyl",
    price: "54.68",
    discontinued: false,
    imageUrl: "./images/products/RS42.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS43",
    title: "Nostalgia EP",
    description: "Artist: Chase Atlantic, Release: Feb 21 2017, Available in: CD",
    price: "15.68",
    discontinued: false,
    imageUrl: "./images/products/RS43.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS44",
    title: "Ctrl",
    description: "Artist: SZA, Release: 2017, Available in: CD",
    price: "21.68",
    discontinued: false,
    imageUrl: "./images/products/RS44.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS45",
    title: "After Hours",
    description: "Artist: The Weeknd, Release: March 20 2020, Available in: Vinyl",
    price: "45.68",
    discontinued: false,
    imageUrl: "./images/products/RS45.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS46",
    title: "Dawn FM",
    description: "Artist: The Weeknd, Release: Feb Jan 7 2022, Available in: Vinyl",
    price: "50.00",
    discontinued: false,
    imageUrl: "./images/products/RS46.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS47",
    title: "Starboy",
    description: "Artist: The Weeknd, Release: Nov 25 2016, Available in: Vinyl",
    price: "49.99",
    discontinued: false,
    imageUrl: "./images/products/RS47.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS48",
    title: "PARTYNEXTDOOR (EP)",
    description: "Artist: PARTYNEXTDOOR, Release: Jul 1 2013, Available in: CD",
    price: "20.00",
    discontinued: false,
    imageUrl: "./images/products/RS48.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS49",
    title: "FOUR",
    description: "Artist: One Direction, Release: Nov 17 2014, Available in: Vinyl",
    price: "39.99",
    discontinued: false,
    imageUrl: "./images/products/RS49.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS50",
    title: "Midnight Memories",
    description: "Artist: One Direction, Release: Nov 25 2013, Available in: Vinyl",
    price: "37.89",
    discontinued: false,
    imageUrl: "./images/products/RS50.jpg",
    categories: ["cat-1"]
  },
  {
    id: "RS51",
    title: "Currents",
    description: "Artist: Tame Impala, Release: Jul 17 2015, Available in: Vinyl",
    price: "37.89",
    discontinued: false,
    imageUrl: "./images/products/RS51.jpg",
    categories: ["cat-3"]
  },
  {
    id: "RS52",
    title: "Good Days - Single",
    description: "Artist: SZA, Release: Dec 25 2020, Available in: CD",
    price: "37.89",
    discontinued: false,
    imageUrl: "./images/products/RS52.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS53",
    title: "Take Time",
    description: "Artist: Giveon, Release: March 27 2020, Available in: Vinyl",
    price: "37.00",
    discontinued: false,
    imageUrl: "./images/products/RS53.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS54",
    title: "BTBT",
    description: "Artist: B.I & Soulja Boy, Release: May 13 2020, Available in: CD",
    price: "15.99",
    discontinued: false,
    imageUrl: "./images/products/RS54.jpg",
    categories: ["cat-4"]
  },
  {
    id: "RS55",
    title: "Our Extended Play",
    description: "Artist: beabadoobee, Release: June 23 2021, Available in: CD",
    price: "15.99",
    discontinued: false,
    imageUrl: "./images/products/RS54.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS56",
    title: "Pony",
    description: "Artist: Rex Orange County, Release: Oct 25 2019, Available in: Vinyl",
    price: "39.99",
    discontinued: false,
    imageUrl: "./images/products/RS56.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS57",
    title: "Chiquito",
    description: "Artist: CUCO, Release: May 4 2018, Available in: CD",
    price: "15.00",
    discontinued: false,
    imageUrl: "./images/products/RS57.jpg",
    categories: ["cat-2"]
  },
  {
    id: "RS58",
    title: "Depression Cherry",
    description: "Artist: Beach House, Release: Aug 28 2015, Available in: Vinyl",
    price: "34.99",
    discontinued: false,
    imageUrl: "./images/products/RS58.jpg",
    categories: ["cat-2"]
  }
  //add cologne, add pluto projector, add cuco, add beachouse
];
