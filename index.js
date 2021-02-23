// Code your solutions in this file
function writeCards(name, event){
  const arr = [];

  for (let i = 0; i < name.length; i++){
    arr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return arr;
}

function countdown(counter) {
  while (counter >= 0 ){
    console.log(counter);
    counter--;
  }
}