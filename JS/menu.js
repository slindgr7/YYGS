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


console.log(data.items);

let wontons = menu.filter(item => item.type === "wonton");


wontons.forEach(element => {
    const getMenu = document.querySelector("#menuItems")
    let itemName = document.createElement('p')
    let itemIngredients = document.createElement('p')

    itemName.innerText = element.name + '  ...............................  ' + element.price + ' SEK'
    itemIngredients.innerText = element.ingredients
    
    getMenu.appendChild(itemName)
    getMenu.appendChild(itemIngredients)

});




console.log(wontons)

