//create a function that check text1 or tex2 returns the longest word it contains.

let text1 = "I woke up early and I went straight to the beach called BAALEBOS"
let text2 = "Weatherman says it's gonna rain strawberry for a week."

function findTheLongestWord(sentence) {

    let words = sentence.split(" ");
    // console.log(words)

    let size = 0;
    let max = [""];

    for (let i = 0; i < words.length; i++) {
        // console.log(words[i], words[i].length)

        if (words[i].length >= size) {
            size = words[i].length;

            if (max[max.length - 1].length < words[i].length) {
                max = [];
                max.push(words[i])
            } else {
                max = [...max, words[i]];
            }
        }

    }

    return [...max]

}

console.log(findTheLongestWord(text2))
console.log(findTheLongestWord(text1))