

setTimeout(popUp, 10000)
var popup = document.querySelector('#popup')


function popUp(){
    popup.style.display = "block"
}

function removePopup(){
    popup.remove()
}

function searchBar(event){
    event.preventDefault()
    var input = document.querySelector('#search-bar')
    alert(`You typed ${input.value}`)
}


function addToCart(){
    var cartCount = document.querySelector('span')
    cartCount.innerText ++
}