import { orderedItems } from "./menu.js"
const checkoutBtn = document.querySelector('#checkoutBtn')
const etaView = document.querySelector('#etaView')
const currentView = document.querySelector('.dialog-container')
const menuView = document.querySelector('#menuView')
const newOrderBtn = document.querySelector('#newOrderBtn'); 
const cartItems = document.querySelector('#cartItems'); 
const totalPrice = document.querySelector('#totalPrice');
const etaTime = document.querySelector('#etaTime');
const orderNr = document.querySelector('#orderNr');

checkoutBtn.addEventListener('click', () => {
    
  currentView.classList.add('hide')
    menuView.classList.add('hide')
    etaView.classList.remove('hide')



})


//gör en ny beställning
newOrderBtn.addEventListener('click', () => {
  
  etaView.classList.add('hide'); 
  menuView.classList.remove('hide'); 

  orderedItems.length = 0; 
  cartItems.textContent = ''; 
  totalPrice.innerText = '0 SEK'; 

  const selectedItems = document.querySelectorAll('.selected');
  selectedItems.forEach(item => {
    item.classList.remove('selected');
  });
});
