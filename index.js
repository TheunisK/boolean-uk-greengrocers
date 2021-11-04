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
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
  },
  {
      id: "002-carrot",
      name: "carrot",
      price: 0.27
  },
  {
      id: "003-apple",
      name: "apple",
      price: 1.23
  },
  {
      id: "004-apricot",
      name: "apricot",
      price: 0.58
  },
  {
      id: "005-avocado",
      name: "avocado",
      price: 2.45
  },
  {
      id: "006-bananas",
      name: "banana",
      price: 0.67
  },
  {
      id: "007-bell-pepper",
      name: "bell-pepper",
      price: 0.39
  },
  {
      id: "008-berry",
      name: "berry",
      price: 0.24
  },
  {
      id: "009-blueberry",
      name: "blueberry",
      price: 1.11
  },
  {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.17
  }
];

const cartItems = [];



// const cartItems = [
//   {
//     "item": {
//       "id": "010-eggplant",
//       "name": "eggplant",
//       "price": 0.17 
//     },
//     "quantity": 1
//   },
// ]



const groceryList = document.querySelector(".store--item-list");
const cartList = document.querySelector(".cart--item-list");
const totalValue = document.querySelector(".total-number");

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

function addOneItem (item) {
      item.quantity++;
  calculateTotal(cartItems);
  renderCartList(cartItems);
}

function removeOneItem (item) {
  let zero = 0;
    item.quantity--;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].quantity == 0) {
        cartItems.splice(i, 1);
      }
    }
    if (cartItems.length == 0 ) {
        totalValue.innerText = "£" + zero.toFixed(2);
    }
    calculateTotal(cartItems);
    renderCartList(cartItems);
}

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total = total + (cartItems[i].item.price)*(cartItems[i].quantity);
    totalValue.innerText = "£" + total.toFixed(2);
  }
}

function addItemToCart (item) {
  let isFound = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].item.id === item.id) {
        cartItems[i].quantity++;
        isFound = true;
      }
    }
    if (isFound === false) {
      const newItem = {
        item: item,
        quantity: 1
      }
      cartItems.push(newItem);
    }
    calculateTotal(cartItems);
}

function renderCartList(cartItems) {
  cartList.innerHTML = "";
  for (let i = 0; i < cartItems.length; i++) {
      const liEl = createElementWithText("li");
      const imgEl = createElementWithText("img");
      const pEl = createElementWithText("p", cartItems[i].item.name);
      const removeButton = createElementWithText("button", "-");
      const quantityAmount = createElementWithText("span", cartItems[i].quantity);
      const addButton = createElementWithText("button", "+");
      cartList.append(liEl);
      liEl.append(imgEl, pEl, removeButton, quantityAmount, addButton);

      addButton.addEventListener("click", function() {
        addOneItem(cartItems[i]);
      })

      removeButton.addEventListener("click", function() {
        removeOneItem(cartItems[i]);
      })
  }
}

function renderGroceryList(groceries) {
  for (let i = 0; i < groceries.length; i++) {
    const liEl = createElementWithText("li");
    const divEl = createElementWithClass("div", "store--item-icon");
    const imgEl = createElementWithText("img");
    imgEl.setAttribute("src", "/assets/icons/" + groceries[i].id + ".svg");
    const cartButton = createElementWithText("button", "Add To Cart");
    cartButton.classList.add("addButton");
    cartButton.classList.add(groceries[i].id);
    divEl.append(imgEl);
    liEl.append(divEl, cartButton);
    groceryList.append(liEl);

    cartButton.addEventListener("click", function() {
      addItemToCart(groceries[i]);
      renderCartList(cartItems);
    });
  }
}
  
renderGroceryList(groceries);
  
