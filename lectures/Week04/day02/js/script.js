console.log('connected')

// Change color and text from off to on or on to off
function change(element) {
    if(element.classList.contains('on')) {
        console.log('on')
        element.classList = 'off'
        element.innerText = 'Off'
    }
    else if(element.classList.contains('off')) {
        console.log('off')
        element.classList = 'on'
        element.innerText = 'On'
    } else {
        console.log('neither')
    }
}

function imgSwap(id) {
    let img = document.getElementById(id)
    let text = document.getElementById('babyAdult')
    if(id == 'baby') {
        img.style.display = 'none'
        let alt = document.getElementById('adult')
        alt.style.display = 'flex'
        text.innerText = 'Greetings Wise One'
    }
    else if(id == 'adult') {
        img.style.display = 'none'
        let alt = document.getElementById('baby')
        alt.style.display = 'flex'
        text.innerText = 'Greetings Young One'
    }

}

function contact() {
    alert("Call us at 555-555-5555")
}

function follow(ele) {
    let num = parseInt(ele.innerText)
    console.log(num)
    num++
    ele.innerText = num
}