console.log('js file connected')

function stringAlert() {
    alert("Baby Fish are cute!!")
}
function stringPara() {
    // var pTag is equal to hey html doc find the id of string Para and that element is now the pTag
    var pTag = document.getElementById('stringPara')
    console.log('the element we are talking to', pTag)
    pTag.innerText = 'Baby Fish are cute!!!'
    console.log('the element we are talking to now with text', pTag)
}
function updateMe(element) {
    element.innerText = "I've been updated"
}