//create a function that that capitilaze each word.

let text1 = "I woke up early and I went straight to the beach called BAALEBOS"
let text2 = "Weatherman says it's gonna rain strawberry for a week."

function capitilazeWords(sentence) {
    let words = sentence.split(" ");
    console.log(words)
    let capitilaze = [];
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i][0])
        capitilaze.push(words[i][0].toUpperCase() + words[i].slice(1))
    }

    return capitilaze
}

console.log(capitilazeWords(text2))