import { orderedItems } from "./menu.js"

const showCartBtn = document.querySelector('#cartBtn')
const dialog = document.querySelector('#cartView')
const closeCart = document.querySelector('#closeCart')
const dialogContainer = document.querySelector('.dialog-container')


dialog.addEventListener('click', event => {
	event.stopPropagation()
})
showCartBtn.addEventListener('click', () => {
	dialogContainer.classList.remove('hide')
	showCartItems()
	dialog.show()
})

closeCart.addEventListener('click', closeDialog)
dialogContainer.addEventListener('click', closeDialog)

function closeDialog() {
	dialog.close()
	dialogContainer.classList.add('hide')
}


//summerar priset
function totalSum () {
	const totalPrice = document.querySelector('#totalPrice')
	let total = 0;

	orderedItems.forEach(item => {
		total += item.itemPrice * item.quantity
	});

	totalPrice.innerText = `${total} SEK`
}


function showCartItems(){
	let cartItems = document.querySelector('#cartItems')
	cartItems.textContent = ""
	orderedItems.forEach((element)=> {
  
	  let cartItemDiv = document.createElement('div')
	  let itemName = document.createElement('h3');
	  let span1 = document.createElement('span');
	  let span2 = document.createElement('span');
	  let decreaseBtn = document.createElement('button')
	  let increaseBtn = document.createElement('button')
	  let volumeDiv = document.createElement('div')
	  let amount = document.createElement('p')
  
	  itemName.classList.add('h3Menu');
	  span1.classList.add('dots');
  
	  itemName.innerText = element.itemName
	  span2.innerText = element.itemPrice + " SEK";
	  decreaseBtn.textContent = "-"
	  increaseBtn.textContent = "+"
	  amount.textContent = `${element.quantity} stycken`;
  
	  cartItemDiv.appendChild(itemName)
	  itemName.appendChild(span1)
	  itemName.appendChild(span2)
	  cartItemDiv.appendChild(volumeDiv)
	  volumeDiv.appendChild(increaseBtn)
	  volumeDiv.appendChild(amount)
	  volumeDiv.appendChild(decreaseBtn)
	  cartItems.appendChild(cartItemDiv)
	})
  
  totalSum()
  
  }

export {totalSum}
