// create a function where it sums all numbers in an array except the biggest one and checks if total of them is bigger than the biggest number

// 1 + 6 + 4 + 2  is it bigger than the the biggest item 10, return true other wise false
const array1 = [1, 6, 4, 2, 10]

// 1 + 2 + 4 + 34 is it bigger than the last item 22, if it is theen return true other wise false
const array2 = [1, 2, 4, 34, 22]


function arraySum(arr) {

    // puts the array items in order from smaller to bigger
    let tempArr = arr.sort((a, b) => {
        return a - b;
    })

    let theBiggestNumber = tempArr.pop()
    console.log('the biggest number:', theBiggestNumber)
    console.log('the array without the biggest number:', tempArr)

    let total = tempArr.reduce((acc, item) => {
        return acc + item
    }, 0)

    console.log('the total:', total)

    if (total > theBiggestNumber) {
        return true
    } else {
        return false
    }
}

console.log(arraySum(array1))
console.log(arraySum(array2))

