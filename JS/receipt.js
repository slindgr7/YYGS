import { orderedItems } from "./menu.js";

const receiptBtn = document.querySelector('#viewReceiptBtn')
const receiptView = document.querySelector('#receiptView')
const etaView = document.querySelector('#etaView')
const orderView = document.querySelector('.dialog-container')
const menuView = document.querySelector('#menuView')
const receiptItems = document.querySelector('#receiptItems')
const receiptTotal = document.querySelector('#receiptTotal')
const priceReceipt = document.querySelector('#priceReceipt')
const etaOrderNr = document.querySelector('#orderNr')
const receiptOrderNr = document.querySelector('#receiptOrderNr')
const newOrderBtn = document.querySelector('#newOrderBtn2');


receiptBtn.addEventListener('click', () => {
    etaView.classList.add('hide')
    orderView.classList.add('hide')
    menuView.classList.add('hide')
    receiptView.classList.remove('hide')
   
    getReceipt();
});


function getReceipt() {
    receiptItems.textContent = ''
    let total = 0;

    orderedItems.forEach(item => {
        let itemDiv = document.createElement('div')
        let itemName = document.createElement('h3')
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        let amount = document.createElement('p')

        itemName.classList.add('h3Menu')
        span1.classList.add('dots')

        itemName.innerText = item.itemName;
        span2.innerText = item.itemPrice + " SEK"
        amount.textContent = `${item.quantity} stycken`

        itemName.appendChild(span1)
        itemName.appendChild(span2)
        itemDiv.appendChild(itemName)
        itemDiv.appendChild(amount)
        receiptItems.appendChild(itemDiv)

        total += item.itemPrice * item.quantity;
        priceReceipt.innerText = `${total} SEK`;

        receiptOrderNr.innerText = etaOrderNr.innerText;
    });


}


newOrderBtn.addEventListener('click', () => {    
        receiptView.classList.add('hide');
        menuView.classList.remove('hide');
    
        orderedItems.length = 0;

        const selectedItems = document.querySelectorAll('.selected');

        receiptItems.textContent = '';
        priceReceipt.innerText = '0 SEK'
        receiptOrderNr.innerText = ''
        etaOrderNr.innerText = ''

        selectedItems.forEach(item => {
            item.classList.remove('selected');
        });
    })




