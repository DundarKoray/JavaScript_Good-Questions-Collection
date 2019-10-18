//create a function where it finds the unique items in an array and return them 

// Array: function should return only "Simon" and "Dean"
const names = ["Hari", "Simon", "Dean", "Koray", "Hari", "Koray"]
const names1 = ["Hari", "Simon", "Phuc", "Koray"]

// String: function should return true for unique_x and false for notUnique_y once it is passed as a parameter.
let unique_x = "abcde"
let notUnique_y = "gbcdabcdefb"


// Create a function where it removes duplicated items
const studentsID = ["001", "001", "002", "003", "003", "004"]








//String version
function isItAUniqueString(str) {
    let values = []
    // console.log(values)

    for (let letter of str) {
        // console.log(letter)

        if (values.indexOf(letter) !== -1) {
            return false
        }

        values.push(letter)
    }

    return true
}

console.log(isItAUniqueString(notUnique_y)) // false
console.log(isItAUniqueString(unique_x)) // true



//Array version a
function findUniqueItems(arr) {
    let newUniqueArray = []

    arr.forEach((name) => {
        if (arr.indexOf(name) === arr.lastIndexOf(name)) {
            newUniqueArray.push(name)
        }
    })

    return newUniqueArray
}

console.log(findUniqueItems(names))
// Object version



//
function uniqueItemsWithNewSet(arr) {
    return new Set(arr).size === arr.length
}

console.log(uniqueItemsWithNewSet(names)) // false
console.log(uniqueItemsWithNewSet(names1)) // true


//new set
function findUniqueItemsWithNewSet(arr) {
    let newReducedArray = new Set(arr)
    return newReducedArray
}

console.log(findUniqueItemsWithNewSet(studentsID))