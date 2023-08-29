
// Timeout for discount
var popup = document.querySelector('#popup')
setTimeout(function(){
    popup.style.display = "block";

}, 10000);

function removePopup() {  
    popup.remove()
}
// Form search pop-up
// var form = document.querySelector('form');
function searchBar(event, el){
    // console.log(e);
    event.preventDefault();
    // FormData creates a form object from the HTML form 
    var formData = new FormData(el);

    // .get method allows us to get what the user input in the form 
    // "search" is the name on the input
    console.log(formData.get('search'));

    alert(formData.get('search'));
}
// form.addEventListener('submit', search);


// Add to cart
// var buttons = document.querySelectorAll('button');
// console.log(buttons);
var cartAmount = document.querySelector('span');

// for (var i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', increaseCart);
// }
function increaseCart(){
    console.log("in increase cart");
    // console.log(cartAmount.innerText);
    // var cart = parseInt(cartAmount.innerText);
    // cart = cart + 1;
    // cartAmount.innerText = cart
    cartAmount.innerText++
}






var language= "js"
var x = 77

console.log(`I love ${x}`)

console.log("I love" + " " + language)


