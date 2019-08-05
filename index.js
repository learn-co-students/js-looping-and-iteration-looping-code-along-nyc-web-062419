// Code your solutions in this file

let writeCards = (name_array, event) => {
  let new_array = [];
  for (let i=0; i<name_array.length;i++){
  new_array.push(`Thank you, ${name_array[i]}, for the wonderful ${event} gift!`)
}
return new_array;
}

let countdown = (int) => {
  while (int > 0) {
    console.log(int--);

  }
  console.log(int)
}
