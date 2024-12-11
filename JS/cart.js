import { showCartItems } from "./menu.js"

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


