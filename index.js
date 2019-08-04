// Code your solutions in this file

function writeCards(array, holiday) {
    const new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful ${holiday} gift!`);
    }
    return new_array
}

function countdown(n) {
        while (n >= 0) {
            console.log(n--);
    }
}
