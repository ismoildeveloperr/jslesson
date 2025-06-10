// const message = "Hello";

// function logMessage() {
//     console.log(message);
// }

// logMessage();

// console.log(`${message}, friend!`)

// const message = "Глобалный привет";
// function logMessage() {
//     const message = "Локальный привет";
//     console.log(message)
//     for(let i = 0; i < 3; i++) {
//       const message = `Итерация Цикл ${i}`;
//         console.log(message);
//     }
// }
// logMessage();
// console.log(message);

// function logMessage(message, count){
//   for(let i = 0; i < count; i++) {
//     console.log(message);
//   }
// } 
// logMessage("Привет", 3);
// logMessage("Пока", 2);
// logMessage("Здраствуйте", 50);

// const message = 'Привет'
// function logMessage(message, count){
//   message=`(((${message})))`
//   for(let i = 0; i < count; i++) {
//     console.log(message);
//   }
// }
// logMessage(message, 3);
// console.log(message);

// const globalMessage = 'Привет';
// function logMessage(message, count=10){
//   const messageFormatted = `(((${message})))`;
//   for(let i = 0; i < count; i++) {
//     console.log(messageFormatted);
//   }
// }
// logMessage(globalMessage); 

// const globalMessage = 'Привет'
// function logMessage(message='HELLO', count){
//   const messageFormatted = `(((${message})))`;
//   for(let i = 0; i < count; i++) {
//     console.log(messageFormatted);
//   }
// }
// logMessage(undefined, 3)

// function sumFiveNumbers(
//   num1 = 100,
//   num2 = 200,
//   num3 = 300,
//   num4 = 400,
//   num5,
// ){
//   const sum = num1 + num2 + num3 + num4 + num5;
//   console.log(`Сумма чисел равна: ${sum}`);
// }
// sumFiveNumbers(
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   5000
// );

// function sumFiveNumbers(
//   num5,
//   num1 = 100,
//   num2 = 200,
//   num3 = 300,
//   num4 = 400, 
// ){
//   const sum = num1 + num2 + num3 + num4 + num5;
//   console.log(`Сумма чисел равна: ${sum}`);
// }
// sumFiveNumbers(
//   5000,  
// );

// function sum(a,b){
//   return a + b
//   console.log('Привет')
//   console.log('Пока')
// }

// console.log(sum(111,222))

// function getAgeType(age){
//   if(typeof age !=='number'){
//     return 'Возраст указан некорректно'
//   }
//   if (age < 1 ||age >125) {
//     return 'Такого возраста не может быть!'
//   }
//   if (age<18){
//     return'Несовершеннолетний'
//   }
//   return 'Взрослый'
// }
// console.log(getAgeType('fef'))

// function getSecretMessage(name){
//   if(!name) return `твой имя нету`
//   return `О, я тебя знаю! Ты же тот самый ${name}?`
// }
// console.log(
//   getSecretMessage('')
// )

function greet(name){
 if (!name) return 'Я тебя не приветствую';
  return `Я тебя приветствую, ${name}`;
}
console.log(greet('ismoil'))
console.log(greet())