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

function logMessage(message, count){
  for(let i = 0; i < count; i++) {
    console.log(message);
  }
} 
logMessage("Привет", 3);
logMessage("Пока", 2);
logMessage("Здраствуйте", 50);