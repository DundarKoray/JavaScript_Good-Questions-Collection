//create a function where it finds the unique items in an array and return them 

// Array: function should return only "Simon" and "Dean"
const names = ["Hari", "Simon", "Dean", "Koray", "Hari", "Koray"]

// String: function should return true for unique_x and false for notUnique_y once it is passed as a parameter.
let unique_x = "abcde"
let notUnique_y = "gbcdabcdefb"



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



//Array version
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
