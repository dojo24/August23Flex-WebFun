// Given an array return the sum of all the even numbers
// Be sure to test all

let array = [2, 4, 6, 5, 7, 8, 9, 10, 4, 24]
// array = [6, 5, 7, 8, 9, 40, 21, -23, -15]
// array = [21, -23, -15, 7, 8, 9, 10]
// array = [2, 4, -23, -15, 2, 4, 2, 4]

// 1. for loop
// 2. way to check if even / odd
// 3. each even number gets added to sum and returned at the end

let sum = 0

for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {  // if the value of i divided by 2 has 0 remainders then it is even
        sum = sum + array[i]
    }
    console.log(sum)
    
}
return sum

// line 4-7 = the array of numbers to check
// line 13 = sum starting point
// line 15 = for loop start at 0, end at the end of the array, increase by 1 each loop
// line 16 = checking if the value of current index is divisible by 2 with no remainder thus even
// line 17 = if yes was true then adding that value to the current value of sum
// line 19 = pulse check in loop to make sure sum is increasing with a console log
// line 22 = final result is returned


// Given an variable check to see if it is greater than, equal to, or less than 10.  Print the variable and a statement
// Be sure to test all

let x = 10
// x = 5
// x = 20
// x = -30



// Given an variable check to see if it is less than 5 equal to 10 less than -20.  Print the variable and a statement.  Use all if statements and then again but with 1 else if before the else.
// Be sure to test all

let y = 10
// y = -30
// y = -10
// y = 50

// Given a variable check to see if it is even and greater than 10, odd and less than 10, even or odd only 1 statement can print out of all conditionals. print the variable and a statement
// Be sure to test all

let z = 50
z = 20
z = -23
z = 15
