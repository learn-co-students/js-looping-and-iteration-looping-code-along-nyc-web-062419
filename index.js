// Code your solutions in this file
function writeCards(names) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return cards
}

function countdown(num) {
    while (num > -1) {
        console.log(num);
        num--
    }
}