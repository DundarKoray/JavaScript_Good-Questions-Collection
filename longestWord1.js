//create a function that check text1 or tex2 returns the longest word it contains.

let text1 = "I woke up early and I went straight to the beach."
let text2 = "Weatherman says it's gonna rain for a week."


function findTheLongestWord(sentence) {
    console.log(sentence)

    let words = sentence.split(" ");
    console.log(words)

    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }

    return longestWord

}

console.log(findTheLongestWord(text2))





//this is not a good solution because this will return the first longest word. what if there are two words both 8 characters, in this case it should return both of these words. Check the question2







// function findTheLongestWord(sentence) {
//     console.log(sentence)

//     let words = sentence.split(" ")
//     console.log(words)


//     const emptyArray = [];

//     for (item of words) {

//         let numbersOfWord = item.length
//         emptyArray.push(numbersOfWord)

//     }
//     console.log(Math.max(...emptyArray))

//     const index = emptyArray.indexOf(Math.max(...emptyArray))
//     console.log(index);

//     console.log(emptyArray);
//     return words[index]


// }

// console.log(findTheLongestWord(text1))