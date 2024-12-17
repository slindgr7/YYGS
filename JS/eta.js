import { orderedItems } from "./menu.js";

const checkoutBtn = document.querySelector('#checkoutBtn');
const etaView = document.querySelector('#etaView');
const orderView = document.querySelector('.dialog-container');
const menuView = document.querySelector('#menuView');
const newOrderBtn = document.querySelector('#newOrderBtn');
const cartItems = document.querySelector('#cartItems');
const totalPrice = document.querySelector('#totalPrice');
const etaTimeElement = document.querySelector('#etaTime');
const orderNr = document.querySelector('#orderNr');



checkoutBtn.addEventListener('click', async () => {
    
    orderView.classList.add('hide')
    menuView.classList.add('hide')
    etaView.classList.remove('hide')

    let itemsAmount = []
    
    orderedItems.forEach(element => {
        itemsAmount.push(element.menuId)
    })

    const bodyToSend = {
        items: itemsAmount
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-zocom": "yum-7BTxHCyHhzI",
        },
        body: JSON.stringify(bodyToSend),
    };
  
    const apiUrl = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/pbxr/orders"

    try {
        const response = await fetch(apiUrl, options)
        const data = await response.json()

        if (response.ok) {
          const etaDate = new Date(data.order.eta) 
          const minutes = etaDate.getMinutes()  
          
          etaTimeElement.innerText = `ETA ${minutes} MIN`
          orderNr.innerText = `#${data.order.id}`
      
          
      } else {
          console.log("Fel vid API-förfrågan:", data)
          etaTimeElement.innerText = "Fel vid beräkning av ETA"
      }
    } catch (error) {

        console.log("Nätverksfel:", error);
        etaTimeElement.innerText = "Anslutningsfel"

    }

});



newOrderBtn.addEventListener('click', () => {
  
  etaView.classList.add('hide')
  menuView.classList.remove('hide') 

  
  orderedItems.length = 0
  cartItems.textContent = ''
  totalPrice.innerText = '0 SEK'

  const selectedItems = document.querySelectorAll('.selected')
  selectedItems.forEach(item => {
    item.classList.remove('selected')
  });
});


