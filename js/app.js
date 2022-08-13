/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Nabeeha Siddiqui
 *      Student ID: 129947214
 *      Date:       31/07/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
window.onload = function () {
  var menuElement = document.getElementById("menu");
  var categories = window.categories;
  for (let i = 0; i < categories.length; i++) {
    var menuButton = document.createElement("button");
    menuButton.setAttribute("id", categories[i].id);
    menuButton.setAttribute("class", "btn");
    menuButton.type = "button";
    menuButton.innerHTML = categories[i].name;
    menuElement.appendChild(menuButton);
  }
  var defaultTable = window.categories[0];
  display(defaultTable);
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((node, index) => {
    node.addEventListener("click", function () {
      display(categories[index]);
    });
  });

  const tableRows = document.querySelectorAll("tr");
  tableRows.forEach((node) => {
    node.addEventListener("click", function () {
      console.log(this);
    });
  });
};
function display(catObj) {
  var displayHeading = document.getElementById("selected-category");
  var heading = document.createTextNode("Genre: " + catObj.name);
  displayHeading.setAttribute("class", "heading");
  displayHeading.innerHTML = "";
  displayHeading.appendChild(heading);

  var cardDisplay = document.getElementById("category-products");
  cardDisplay.replaceChildren(" ");

  var arrProducts = window.products;
  var filteredArray = [];
  filteredArray = arrProducts.filter((products) => {
    return products.categories.includes(catObj.id) && products.discontinued === false;
  });
  filteredArray.forEach((products) => {
    cardDisplay.appendChild(createCard(products));
  });
}
function createCard(products) {
  var productImage = document.createElement("img");
  productImage.setAttribute("src", products.imageUrl);
  productImage.setAttribute("alt", `Product Card for: ${products.title}`);

  var productCard = document.createElement("div");
  var albumTitleData = document.createElement("h1");
  var albumDescdata = document.createElement("p");
  var albumPriceData = document.createElement("footer");
  productCard.setAttribute("class", "card");

  var albumTitle = document.createTextNode(products.title);
  var albumDescription = document.createTextNode(products.description);
  var albumPrice = document.createTextNode(
    new Intl.NumberFormat("je-JY", { style: "currency", currency: "CAD" }).format(products.price)
  );
  albumTitleData.appendChild(albumTitle);
  albumDescdata.appendChild(albumDescription);
  albumPriceData.appendChild(albumPrice);
  productCard.append(productImage, albumTitleData, albumDescdata, albumPriceData);
  return productCard;
}
// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
