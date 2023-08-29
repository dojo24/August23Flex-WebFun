// const {words} = require('./words')
let words = {
    'adjective': [
        {'name': 'Bumpy'},
        {'name': 'Hilarious'},
        {'name': 'Sparkling'},
        {'name': 'Grumpy'}
    ],
    'noun': [
        {'name': 'Unicorn'},
        {'name': 'Banana'},
        {'name': 'Ocean'},
        {'name': 'Mountain'}
    ],
    'name': [
        {'name': 'Emily'},
        {'name': 'Liam'},
        {'name': 'Sophia'},
        {'name': 'Noah'}
    ],
    'programmingLanguage': [
        {'name': 'Python'},
        {'name': 'JavaScript'},
        {'name': 'Java'},
        {'name': 'C++'}
    ],
    'device': [
        {'name': 'Smartphone'},
        {'name': 'Laptop'},
        {'name': 'Tablet'},
        {'name': 'Smartwatch'}
    ]
}

// random reusable function
// pulls the part of the word bank we need (adjective, noun, etc)
// picks a random word from that section
// and updates the pulled id's innerText

console.log(words)
function rand() {
    let randNum = Math.floor(Math.random() * 4);
    return randNum
}

function updateMadLib() {
    var a = document.getElementById('adj')
    var b = document.getElementById('noun')
    var c = document.getElementById('name')
    var d = document.getElementById('proglang')
    var e = document.getElementById('device')
    console.log(a,b,c,d,e)
    var f = words['adjective'][rand()]['name']
    var g = words['noun'][rand()]['name']
    var h = words['name'][rand()]['name']
    var i = words['programmingLanguage'][rand()]['name']
    var j = words['device'][rand()]['name']
    console.log(f,g,h,i,j)
    a.innerText = f
    b.innerText = g
    c.innerText = h
    d.innerText = i
    e.innerText = j
    console.log(a,b,c,d,e)
}
updateMadLib()