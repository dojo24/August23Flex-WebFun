var duck = {
    bill: true, 
    feet: "webbed",
    featherColors: [
        "yellow", "brown", "blue"
    ],
    famousDucks: [
    {
        name: "Scrooge McDuck", 
        company: "Disney"
    },
    {
        name: "Daffy", 
        company: "Warner Brothers"
    },
    {
        name: "Darkwing Duck", 
        company: "Disney"
    }
    ]
}

var famousDucks = [
    {
        name: "Scrooge McDuck", 
        company: "Disney"
    },
    {
        name: "Daffy", 
        company: "Warner Brothers"
    },
    {
        name: "Darkwing Duck", 
        company: "Disney"
    }
]

console.log(duck)
console.log(duck['feet'])
console.log(duck['famousDucks'])
console.log(famousDucks)



var array01 = [2,5,7,1,3,9,0,4,6,8]
var newArray = []
var temp = array01[0]
console.log(temp)
for(var i = 0; i < array01.length; i++) {
    console.log(array01[i])
    if(array01[i]< temp) {
        newArray.unshift(array01[i])
    }
    else {
        newArray.push(array01[i])
    }
    temp = array01[0+1]
}

console.log(newArray)


array01.sort()
console.log(array01)

console.log("leaving a message during lecture")