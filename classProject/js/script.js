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


// Rock Paper Scissor Lizard Spock Logic

var p1Choice = ''
var p2Choice = ''
function p1(choice) {
    p1Choice = choice
    console.log(p1Choice)
    return p1Choice
}
function p2(choice) {
    p2Choice = choice
    console.log(p2Choice)
    return p2Choice
}


var one = "Player 1 won"
var two = "Player 2 won"

// Rock Crushes Scissors
// Scissors Decapitates Lizard
// Lizard Eats Paper
// Paper Disproves Spock
// Spock Vaporizes Rock
// Scissors Cuts Paper
// Paper Covers Rock
// Rock Crushes Lizard
// Lizard Poisons Spock
// Spock Smashes Scissors
function check() {
    var one = "Player 1 won"
    var two = "Player 2 won"
    if(p1Choice == p2Choice) {
        console.log('A tie')
        text = `<h2>You both chose ${p1Choice} so it ends in a tie</h2>`
    }
    else if(p1Choice == 'Rock') {
        if(p2Choice == 'Scissors') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Lizard') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Spock') {
            console.log(two)
            text = `<h2>${two}</h2>`
        } else {
            console.log(two)
            text = `<h2>${two}</h2>`
        }
    }
    else if(p1Choice == 'Scissors') {
        if(p2Choice == 'Lizard') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Paper') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Rock') {
            console.log(two)
            text = `<h2>${two}</h2>`
        } else {
            console.log(two)
            text = `<h2>${two}</h2>`
        }
    }
    else if(p1Choice == 'Lizard') {
        if(p2Choice == 'Paper') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Spock') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Scissors') {
            console.log(two)
            text = `<h2>${two}</h2>`
        } else {
            console.log(two)
            text = `<h2>${two}</h2>`
        }
    }
    else if(p1Choice == 'Paper') {
        if(p2Choice == 'Spock') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Rock') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Lizard') {
            console.log(two)
            text = `<h2>${two}</h2>`
        } else {
            console.log(two)
            text = `<h2>${two}</h2>`
        }
    }
    else if(p1Choice == 'Spock') {
        if(p2Choice == 'Rock') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Scissors') {
            console.log(one)
            text = `<h2>${one}</h2>`
        }
        else if(p2Choice == 'Paper') {
            console.log(two)
            text = `<h2>${two}</h2>`
        } else {
            console.log(two)
            text = `<h2>${two}</h2>`
        }
    }
    var newp1 = p1Choice.toLowerCase()
    var newp2 = p2Choice.toLowerCase()
    var p1Img = `<img src="./images/${newp1}.png" alt="${newp1}">`
    var p2Img = `<img src="./images/${newp2}.png" alt="${newp2}">`
    var finalp1Img = document.getElementById('p1Choice')
    var finalp2Img = document.getElementById('p2Choice')
    finalp1Img.innerHTML = p1Img
    finalp2Img.innerHTML = p2Img
    setTimeout(function() {
        var final = document.getElementById('result')
        final.innerHTML = text
    }, 2000)
}

