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

// function greet(name){
//  if (!name) return 'Я тебя не приветствую';
//   return `Я тебя приветствую, ${name}`;
// }
// console.log(greet('ismoil'))
// console.log(greet())

// function logMessage(){
//   console.log('Привет!');
// }
// logMessage();

// function logMessage(){
//   console.log('Пока!');
// }

// function logAll(){
//   console.log(arguments)
// }
// logAll('Привет', 'Пока', 123, true, null, undefined, {name: 'Ismoil'}, [1,2,3]);
// logMessage();

// function logMessage(){
//   console.log('Привет!');
// }
// logMessage();
// const logMessage = function(){
//   console.log('Пока!');
// }

// const logHello = () => {
//   console.log('Привет!');
// }
// logHello();

// const sum = (a, b) => a + b
// console.log(sum(10, 20));
// function fn1(){
//   return 'Я функция fn1';
// }
// const fn2 = function(){
//   return 'Я функция fn2';
// }
// const fn3 = () => {
//   return 'Я функция fn3';
// }
// console.log(fn1());
// console.log(fn2());
// console.log(fn3());

// const kvadrat = (a) => a * a;
// console.log(kvadrat(5));

// const rostkunja = (a,b) => (2 * (a + b))
// console.log(rostkunja(5,4))

// const firstEmptyObject = {};
// const secondEmptyObject = new Object();

// const user = {
//   login: 'Ismoil',
//   password: '123456',
//   registrationdate: '2023-10-01',
//   status: '1',
//   age: 18,
//   job: {
//     title: 'Frontend Developer',
//     salary: 1000,
//     company: {
//       name: 'IT Company',
//       address: '123 Main St',
//       city: 'Tajikistan',
//       state: 'Dushanbe',  
//       country: 'khujand',
//       zip: '734000',
//     }
//   },
//   sayHi:()=> console.log('Привет, я пользователь!'),
// }

// console.log(user.job.company.city);
// console.log(user['age'])
// console.log(user.job.salary)
// console.log(user.job.company.zip)
// user.sayHi();

// const user = {}
// user.name = 'Ismoil';
// user['is developer'] = true;
// console.log(user);
// user.name = 'Ismoil Ismoilov';
// user['is developer'] = false;
// user.age = 18;
// console.log(user);
// delete user.age;
// console.log(user);

// const name = 'Ismoil';
// const age = 21;

// const user = {
//   name: name,
//   age: age,
// };
// console.log(user);


// const name = 'Ismoil';
// const age = 21;

// const user = {
//   name,
//   age,
// };
// console.log(user);

// const propName = prompt('Введите имя свойства объекта');
// const propValue = prompt(`Введите значение свойства объекта "${propName}"`);
// const user = {
//   [propName]: propValue,
// };
// console.log(user)

// const user = {
//   name: 'Ismoil',
//   age: 21,
//   isDeveloper: true,
// };
// for(const key in user) {
//   console.log(`Ключ: ${key}, Значение: ${user[key]}`);
// }

// const nums={
//   'name':'ismoil',
//   2:'Two',
//   3:'Three',
//   1:'One',
//   age:20
// }

// for(const num in nums){
//   console.log(nums[num])
// }