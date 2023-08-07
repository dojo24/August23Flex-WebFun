// Predict the outcomes

let grades = [90, 80, 75, 100, 60, 55, 90, 85, 75, 100]

function minMaxAvg() {
    let min = grades[0] // setting min to the 1st item in array (not 0 as that may not be part of the array and thus never change)
    let max = grades[0] // setting max to the 1st item in array (not 0 as that may not be part of the array and thus never change)
    let sum = 0 // creating a var to keep track of the sum
    let avg = 0 // for the average
    for(var i = 0; i < grades.length; i++) { // for loop to go through grades
        if(grades[i] < min) { // finding the min if current value in loop is less than curr value of min
            min = grades[i] // change min to current value in loop
        }
        if(grades[i] > max) { // finding the max if current value in loop is greater than curr value of max
            max = grades[i] // change max to current value in loop
        }
        sum += grades[i] // sum will now be equal to current value plus current loop value
    }
    let count = grades.length  // creating a var of count to get the total number of grades
    avg = sum/count // finding average buy dividing sum by number of grades
    console.log('min:', min, 'max:', max, 'avg:', avg)
}
minMaxAvg()


function nestedForLoops() {
    for(var i = 4; i < 6; i++){ // i starts at 4, ends at 6, increases by 1 each loop
        for(var j = 4; j < 5; j++){ // j starts at 4, ends at 5, and increases 1 each loop
           console.log(i,j); // print the current value of i and j while inside 2nd loop
        }
    }
}


// https://codedamn.com/news/javascript/nested-for-loops-in-javascript-why

// start with i = 4
// j starts at 4
// 4, 4
// j++ = 5
// is 5 < 5? no end loop
// i++ = 5
// is 5 < 6? yes
// j = 4
// 5, 4
// j++ = 5
// is 5 < 5? no end loop
// i++ = 6
// is 6 < 6? no end loop

var x = 0 // x is  0
for(var i=1; i<5; i++) { // i will start at 1, stop at 5, and increase by 1 each time
    x += i // integer + integer means it will add
}
console.log(x)


var y = "0" // x is the string of 0
for(var i=1; i<5; i++) { // i will start at 1, stop at 5, and increase by 1 each time
    y += i // string + number means it will concatenate not add 
}
console.log(y) // thus 01234  

// almost like "one" += 1 -> one1

// 1 === 1 -> int 1 is exactly equal to int 1
// 1 == "1" -> int 1 is the same value of string 1
