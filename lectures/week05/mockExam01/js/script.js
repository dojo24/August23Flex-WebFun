console.log('connected')

function addCart() {
    var cart = document.getElementById('cart')
    var add = parseInt(cart.innerText)
    add++
    cart.innerText = add
}