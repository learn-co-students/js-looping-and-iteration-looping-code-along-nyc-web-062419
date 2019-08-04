// Code your solutions in this file

function countdown (count) {
    while (count >= 0) {
        console.log(count);
        count--;
    }
}

function writeCards (names, kind) {
    const cards = []
    for (var i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${kind} gift!`)
    }
    return cards
}