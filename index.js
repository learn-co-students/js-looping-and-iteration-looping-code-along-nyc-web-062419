// Code your solutions in this file
function writeCards(array, event) {
    let newArr = []
    for (let i = 0; i < array.length; i++)
    newArr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    return newArr
}

function countdown(num) {
    let i = num
    while (i > -1) {
        console.log(i--);
      }
}
