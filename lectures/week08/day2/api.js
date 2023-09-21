var url = 'https://dojo.navyladyveteran.com/octocats/'


async function getApi() {
    var res  = await fetch(`${url}`)
    var data = await res.data
    console.log('the data', data)
}
// getApi()

var data = [
    {
        "id": 1,
        "name": "Book Worm",
        "img": "http://images.craftsnherbs.com/octocats/bookWormOctocat.png",
        "cat_id": 6
    },
    {
        "id": 2,
        "name": "Computer",
        "img": "http://images.craftsnherbs.com/octocats/computerOctocat.png",
        "cat_id": 6
    },
    {
        "id": 3,
        "name": "Investigative",
        "img": "http://images.craftsnherbs.com/octocats/investigativeOctocat.png",
        "cat_id": 6
    },
    {
        "id": 4,
        "name": "Mad Scientist",
        "img": "http://images.craftsnherbs.com/octocats/madScientistOctocat.png",
        "cat_id": 6
    },
    {
        "id": 5,
        "name": "Power",
        "img": "http://images.craftsnherbs.com/octocats/powerOctocat.png",
        "cat_id": 6
    },
    {
        "id": 6,
        "name": "Wizard",
        "img": "http://images.craftsnherbs.com/octocats/wizardOctocat.png",
        "cat_id": 6
    }
]
console.log(data)
console.log(data[3])
console.log(data[3]['name'])

// [] use number [0]
// {} use key name ['key']
for(var i =0; i<data.length; i++) {
    console.log(i)
    console.log(data[i]['name'])
}