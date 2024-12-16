import { totalSum } from "./cart.js";


const key = "yum-7BTxHCyHhzI";

const tenant = {
    id: "pbxr",
    name: "Sally"
  }

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-zocom": key,
    },
  };


let url = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu";

const response = await fetch(url, options);
const data = await response.json();

const menu = data.items

console.log(menu)





let orderedItems = []


function removeFromCart(cartItemName){
  orderedItems = orderedItems.filter(element => element.itemName !== cartItemName);

}

let counterID = 0

function addToCart(name, price, itemDiv, id) {
  let menuItem = {itemName: name, itemPrice: price, quantity: 1, elementId: itemDiv.id, menuId: id}
  // En array för att hålla maträtternas namn
  let checkDuplicate = []

  // Lägger in varje dels namn av det beställda i checkDuplicate arrayen
  orderedItems.forEach((element)=>{
    checkDuplicate.push(element.itemName)
  })

  // Kollar efter dubbletter
  let doesItemExist = checkDuplicate.includes(menuItem.itemName)

  // Om maträtten inte redan finns i beställningen så läggs den till i beställningen
  if(doesItemExist) {
    
    let itemToBeRemoved = name
    removeFromCart(itemToBeRemoved)

    itemDiv.classList.remove("selected");
    
  } else {
    orderedItems.push(menuItem)
    itemDiv.classList.add('selected')
  }


  totalSum()
  
}


let wontons = menu.filter(item => item.type === "wonton");
let dipSauce = menu.filter(item => item.type === "dip")
let drinks = menu.filter (item => item.type === "drink")

let counter = 1

wontons.forEach(element => {
  const getMenu = document.querySelector('#menuItems');

 
  let itemDiv = document.createElement('div');
  let itemName = document.createElement('h3');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let itemIngredients = document.createElement('p');
  itemDiv.id = `menuItem${counter}`
  counter += 1

  itemName.classList.add('h3Menu');
  span1.classList.add('dots');

  itemName.innerText = element.name;
  span2.innerText = element.price + " SEK";
  itemIngredients.innerText = element.ingredients.join(', ');

  itemName.appendChild(span1);
  itemName.appendChild(span2);

  itemDiv.appendChild(itemName);
  itemDiv.appendChild(itemIngredients);

  itemDiv.addEventListener('click', () => {
    addToCart(element.name, element.price, itemDiv, element.id)
    
});
 
  getMenu.appendChild(itemDiv);
});



function createSubMenu(id) {
  const headline = document.getElementById(id)
  let spanDip1 = document.createElement('span')
  let spanDip2 = document.createElement('span')


  headline.classList.add('h3Menu')
  spanDip1.classList.add('dots')
  spanDip2.classList.add('span2')
  if(id === 'dipH3') {
    spanDip2.innerText = dipSauce[0].price + " SEK"
  } else if (id === 'drinkH3') {
    spanDip2.innerText = drinks[0].price + " SEK"
  }

  headline.appendChild(spanDip1)
  headline.appendChild(spanDip2)
}


createSubMenu('dipH3')

dipSauce.forEach(element => {
 
    const getDip = document.querySelector('#dipSection')
    let dipName = document.createElement ('p')
    dipName.id = `menuItem${counter}`
    counter += 1
    dipName.innerText = element.name
    dipName.addEventListener('click', ()=> {
      addToCart(element.name, element.price, dipName, element.id)

    })

    getDip.appendChild(dipName)
    
})



createSubMenu('drinkH3')

drinks.forEach (element => {
    const getDrinks = document.querySelector('#drinkSection')
    let drinkName = document.createElement('p')
    drinkName.id = `menuItem${counter}`
    counter += 1
    drinkName.innerText = element.name
    drinkName.addEventListener('click', ()=> {
      addToCart(element.name, element.price, drinkName, element.id)
    })

    getDrinks.appendChild(drinkName)
})




export { orderedItems, removeFromCart}