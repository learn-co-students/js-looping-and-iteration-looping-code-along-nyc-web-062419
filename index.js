// Code your solutions in this file
function writeCards(arr) {
  let newArr = [];
  for (let i in arr) {
    let s = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
    newArr.push(s);
  }
  return newArr;
}
function countdown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(num - i);
  }
}
