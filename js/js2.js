//
// let message = 'Привет'
// console.log(message)
// message = 'Пока'
// console.log(message)
// Переменная — это имя, за которым хранится значение.
let name = "Ali";         // строка
let age = 30;             // число
let isStudent = true;     // булево значение
let skills = ["JS", "CSS"]; // массив

// var — устаревшее объявление переменных
var message = "Hello";
// const — постоянные значения
const birthYear = 1995;


const greeting = 'Привет'
const names = "Александр"
// const goodbye = `пока`

const messages = `${greeting}, ${names}`;

console.log(messages)


const a = 5
const b = 10
const sum = `Сумма a и b равна ${a+b}`
console.log(sum)



const posX = 50
const posY = -100
const posZ = 1.55
const point = (posX + posY + posZ) * 2 / posX
console.log(point)

console.log('Слово' / 100)
console.log(100/0)
console.log(-100/0)

console.log(9900000000000091n + 1n)
console.log(9900000000000091n + 2n)

const ages = 20
const isChilde = ages < 18
console.log(isChilde)