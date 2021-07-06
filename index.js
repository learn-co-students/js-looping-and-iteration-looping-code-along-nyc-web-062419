function writeCards(names, event) {
    let ty = []
    for (let i = 0; i < names.length; i++) {
        ty.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
    }
    return ty;

}

function countdown(num) {
    while (num > -1) {
        console.log(num --);

    }

}


// function writeCards( namesArray, event ) {
//     let thankYouCards = []
//     for ( let i = 0; i < namesArray.length; i++ ) {
//       thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
//     }
//     return thankYouCards
//   }