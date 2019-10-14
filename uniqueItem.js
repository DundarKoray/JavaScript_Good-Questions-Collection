//find the unique items in an array
// function should return only "Simon" and "Dean"

const names = ["Hari", "Simon", "Dean", "Koray", "Hari", "Koray"]


function findUniqueItems(arr) {
    let newUniqueArray = []

    names.forEach((name) => {
        if (names.indexOf(name) === names.lastIndexOf(name)) {
            newUniqueArray.push(name)
        }
    })

    return newUniqueArray
}

console.log(findUniqueItems(names))