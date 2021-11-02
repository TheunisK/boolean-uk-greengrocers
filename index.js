/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const groceries = [

  {
      "id": "001-beetroot",
      "name": "beetroot",
      "price": 0.35,
      "quantity": 0
  },
  {
      "id": "002-carrot",
      "name": "carrot",
      "price": 0.27,
      "quantity": 0
  },
  {
      "id": "003-apple",
      "name": "apple",
      "price": 1.23,
      "quantity": 0
  },
  {
      "id": "004-apricot",
      "name": "apricot",
      "price": 0.58,
      "quantity": 0
  },
  {
      "id": "005-avocado",
      "name": "avocado",
      "price": 2.45,
      "quantity": 0
  },
  {
      "id": "006-bananas",
      "name": "banana",
      "price": 0.67,
      "quantity": 0
  },
  {
      "id": "007-bell-pepper",
      "name": "bell-pepper",
      "price": 0.39,
      "quantity": 0
  },
  {
      "id": "008-berry",
      "name": "berry",
      "price": 0.24,
      "quantity": 0
  },
  {
      "id": "009-blueberry",
      "name": "blueberry",
      "price": 1.11,
      "quantity": 0
  },
  {
      "id": "010-eggplant",
      "name": "eggplant",
      "price": 0.17,
      "quantity": 0
  }
];

const groceryList = document.querySelector(".store--item-list");
const cartList = document.querySelector(".cart--item-list");

function createElementWithClass(element = "", className = "", text = "") {
  const elEl = document.createElement(element);
  elEl.classList.add(className);
  elEl.innerText = String(text);
  return elEl;
}

function createElementWithText(element = "", text = "") {
  const elEl = document.createElement(element);
  elEl.innerText = String(text);
  return elEl;
}

function addItemInCart(item) {
  const liEl = createElementWithText("li");
  const imgEl = createElementWithText("img");
  const pEl = createElementWithText("p", item.name);
  const removeButton = createElementWithText("button", "-");
  const quantityAmount = createElementWithText("span", 1);
  const addButton = createElementWithText("button", "+");
  cartList.append(liEl);
  liEl.append(imgEl, pEl, removeButton, quantityAmount, addButton);
  // console.log(parseInt(quantityAmount.innerText));
  let quantity = parseInt(quantityAmount.innerText);

  addButton.addEventListener("click", function() {
    quantity++;
    quantityAmount.innerText = quantity;

  });

  removeButton.addEventListener("click", function() {
    quantity--;
    quantityAmount.innerText = quantity;
  })
  if (quantityAmount.innerText == 0) {
    cartList.removeChild();
  }


}

function renderGroceryList(grocery) {
  const liEl = createElementWithText("li");
  const divEl = createElementWithClass("div", "store--item-icon");
  const imgEl = createElementWithText("img");
  imgEl.setAttribute("src", "/assets/icons/" + grocery.id + ".svg");
  const cartButton = createElementWithText("button", "Add To Cart");
  cartButton.classList.add("addButton");
  cartButton.classList.add(grocery.id);
  divEl.append(imgEl);
  liEl.append(divEl, cartButton);
  groceryList.append(liEl);
  console.log(liEl);
  console.log(grocery.id);

  cartButton.addEventListener("click", function() {
    addItemInCart(grocery);
  });
  



}

function renderGrocery(groceries) {
  for (grocery of groceries) {
    renderGroceryList(grocery);
  }
}

renderGrocery(groceries);

// function init () {
//   fetch("http://localhost:3000/groceries")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function(groceries) {
//     // console.log(groceries);
//     renderGrocery(groceries);
//   })
// }

// init();