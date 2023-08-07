// Given an array return the sum of all the even numbers

array = [2,4,6,5,7,8,9,10,4,24]
sum = 0

for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {  // if the value of i divided by 2 has 0 remainders then it is even
        sum = sum + array[i]
    }
    console.log(sum)
    
}
return sum


// Given an variable check to see if it is greater than, equal to, or less than 10.  Print the variable and a statement
// let x = 5

if(x < 5) {
    console.log(x, 'is less than 5')
} 
else if (x<=5) {
    console.log(x, 'is less than or equal to 5')
}else {
    console.log(x,'is bigger than 5')
}

// Given an variable check to see if it is less than 5 equal to 10 less than -20.  Print the variable and a statement.  Use all if statements and then again but with 1 else if before the else.

// let x = -77
if(x < 5) {
    console.log('less than 5')
}
if(x == 10) {
    console.log('less than 10')
}
else if(x < -20) { // this will still trigger because it will only print if the if directly above it is false but this is true
    console.log('less than -20')
} else (
    console.log('just to darn big')
)

// Given a variable check to see if it is even and greater than 10, odd and less than 10, even or odd only 1 statement can print out of all conditionals. print the variable and a statement

let x = 50
if(x % 2 ==0 && x > 10) {
    console.log(x, 'is even and greater than 10')
}
else if(x % 2 != 0 && x < 10) {
    console.log(x, 'is odd and less than 10')
}
else if(x % 2 == 0) {
    console.log(x, 'is even')
}
else if(x % 2 != 0) {
    console.log(x, 'is odd')
} else {
    console.log(x, 'did not meet any requirements')
}