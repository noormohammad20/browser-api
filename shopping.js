const displayLocalStorageCart = () => {
    const cart = getCart()
    for (const name in cart) {
        displayProduct(name)
    }
}

const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value
    if (!name) {
        return
    }
    //    display in ui 
    displayProduct(name)


    // add to localStorage
    addProductToCart(name)
    // clear 
    nameField.value = ''
}
const displayProduct = name => {
    const ul = document.getElementById('Products')
    const li = document.createElement('li')
    li.innerText = name

    ul.appendChild(li)
}

const getCart = cart => {
    const cart = localStorage.getItem('cart')
    let cartObj
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}
    }
    return cartObj
}

const addProductToCart = name => {
    const cart = getCart()
    if (cart[name]) {
        cart[name] = cart[name] + 1
    }
    else {
        cart[name] = 1
    }
    const cardStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cardStringified)
}
const placeOrder = () => {
    document.getElementById('Products').textContent = ''
    localStorage.removeItem('cart')
}
displayLocalStorageCart()