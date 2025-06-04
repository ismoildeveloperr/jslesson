// console.log(sum(2,3))
// function sum(a, b){
//     return a+b
// }

// function logMessage(){
//     console.log('Привет!')
// }

// logMessage()

// function logMessage(){
//     console.log('Пока!')
// }


// let logHello = function(){
//     console.log('Привет!')
// }
//  logHello = function(){
//     console.log('Пока!')
// }
// logHello()


function add(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function maxInArray(arr) {
  return Math.max(...arr);
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

function isPalindrome(str) {
  const clean = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return clean === clean.split('').reverse().join('');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
