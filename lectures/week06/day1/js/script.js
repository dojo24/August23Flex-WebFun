console.log('Yo!')

function colorChange() {
    var ele = document.getElementById('h4Style')
    console.log(ele)
    ele.style.color = 'red'
    ele.style.fontSize = '10px'
}

function addImg() {
    var ele = document.getElementById('addImg')
    console.log(ele)
    ele.innerHTML = `<img src="./images/DSCN1159.JPG" alt="Image">`
}

function showImg() {
    var ele = document.getElementById('hidden')
    console.log(ele)
    ele.style.display = 'flex'
    ele.style.flexDirection = 'row'
    ele.style.width = '1300px'
    ele.style.justifyContent = 'space-evenly'
}

var averageArray = [78,90,45,67,90,12,56,78,45,99]
function findAvg() {
    var temp = 0
    for(var i = 0; i < averageArray.length; i++) {
        temp += averageArray[i]
        console.log(temp)
    }
    temp = temp/averageArray.length
    console.log(temp)
    var ele  = document.getElementById('results')
    ele.innerText = temp
}

function ifLessThan10() {
    var ele  = document.getElementById('results')
    var ten = parseInt(document.ifLessThan.lessthan.value)
    console.log(ele, ten)
    if(ten < 10) {
        ele.innerText = true
    } else {
        ele.innerText = false
    }
}

function changeTag() {
    var ele = document.getElementById('headerTag')
    var tag = document.createElement('h6')
    tag.innerText = ele.innerText
    ele.parentNode.replaceChild(tag, ele)
}

function stringAlert() {
    alert("I am a string")
}

function likeMe() {
    var ele = document.getElementById('like')
    console.log(ele)
    // var num = 45
    var num = parseInt(ele.innerText)
    console.log(num)
    num++
    ele.innerText = num
}

function stringSpan() {
    var ele  = document.getElementById('results')
    var s = document.theString.string.value
    ele.innerText = s
}

function array01Alert() {
    var ele  = document.getElementById('results')
    ele.innerText = averageArray
}

function adding(a,b) {
    var ele  = document.getElementById('results')
    ele.innerText = a+b
}

function adding02() {
    var a = parseInt(document.form01.num01.value)
    var b = parseInt(document.form01.num02.value)
    adding(a,b)
}
