// Predict the outcomes

let grades = [90, 80, 75, 100, 60, 55, 90, 85, 75, 100]

function minMaxAvg() {
    let min = grades[0]
    let max = grades[0]
    let sum = 0 
    let avg = 0 
    for(var i = 0; i < grades.length; i++) { 
        if(grades[i] < min) { 
            min = grades[i] 
        }
        if(grades[i] > max) { 
            max = grades[i]
        }
        sum += grades[i]
    }
    let count = grades.length
    avg = sum/count
    console.log('min:', min, 'max:', max, 'avg:', avg)
}
minMaxAvg()


function nestedForLoops() {
    for(var i = 4; i < 6; i++){
        for(var j = 4; j < 5; j++){
            console.log(i,j);
        }
    }
}
nestedForLoops()

var x = 0
for(var i=1; i<5; i++) { 
    x += i 
}
console.log(x)


var y = "0"
for(var i=1; i<5; i++) {
    y += i
}
console.log(y)
