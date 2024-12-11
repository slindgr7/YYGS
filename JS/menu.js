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


// function showCartItems(cart){
//   console.clear()
//   let orderedItems = cart
//   //console.log(orderedItems)
//   orderedItems.forEach((element)=> {
//   //console.log(`Ordered: ${element.itemName}, ${element.itemPrice}, ${element.quantity}`)
//   })
// }

let orderedItems = []

function addToCart(name, price, itemDiv) {
  let menuItem = {itemName: name, itemPrice: price, quantity: 1}

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
    orderedItems = orderedItems.filter(element => element.itemName !== itemToBeRemoved);

    itemDiv.classList.remove("selected");
    
  } else {
    orderedItems.push(menuItem)
    itemDiv.classList.add('selected')
  }

  console.log(orderedItems)

  //showCartItems(orderedItems)
}

// async funktion
let wontons = menu.filter(item => item.type === "wonton");
let dipSauce = menu.filter(item => item.type === "dip")
let drinks = menu.filter (item => item.type === "drink")

// Wontons  
wontons.forEach(element => {
  const getMenu = document.querySelector('#menuItems');

 
  let itemDiv = document.createElement('div');
  let itemName = document.createElement('h3');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let itemIngredients = document.createElement('p');

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
    addToCart(element.name, element.price, itemDiv)
    
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

    spanDip2.innerText = "19 SEK"

    headline.appendChild(spanDip1)
    headline.appendChild(spanDip2)
}


createSubMenu('dipH3')

dipSauce.forEach(element => {
 
    const getDip = document.querySelector('#dipSection')
    let dipName = document.createElement ('p')
    dipName.innerText = element.name

    getDip.appendChild(dipName)
})



createSubMenu('drinkH3')

drinks.forEach (element => {
    const getDrinks = document.querySelector('#drinkSection')
    let drinkName = document.createElement('p')

    drinkName.innerText = element.name

    getDrinks.appendChild(drinkName)
})
