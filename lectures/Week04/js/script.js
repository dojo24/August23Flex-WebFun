console.log('connected')

function runAlert() {
    alert('I have been clicked')
    anotherAlert()
}
function anotherAlert() {
    alert('I need no button')
}
// anotherAlert()
function growMe(element) {
    element.style.height = '300px'
}
function shrinkMe(element) {
    element.style.height = '10px'
}

function likeMe(id) {
    var ele = document.getElementById(id)
    numLikes = document.getElementById(id).innerHTML
    numLikes++
    ele.innerText = numLikes
}
// line 18 function called likeMe needs to have the id passed into it when called
// line 19 ele is now the element on the html that has the id passed in
// line 20 numLikes is now equal to the elements current value (even if changed with is function)
// line 21 add one to the number it pulled
// line 22 now update the html with the new value