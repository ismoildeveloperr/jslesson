// class Student{
//     constructor(name, age){
//         this.name=name
//         this.age=age
//     }
// }
// const firstStudent= new Student('User1', 29)
// const secondStudent= new Student('User2', 30)
// console.log('firstStudent:', firstStudent)
// console.log('secondStudent:', secondStudent)

// class Car {
//   drive() {
//     console.log("Машина едет");
//   }
// }
// const myCar = new Car();
// myCar.drive();

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   greet() {
//     console.log(`Привет, ${this.name} ${this.surname}`);
//   }
// }
// const user = new User("Оля", "Александров");
// user.greet();

// class Animal {
//   speak() {
//     console.log("Животное издаёт звук");
//   }
// }

// class Cat extends Animal {}

// const cat = new Cat();

// cat.speak();

// class Book {
//   constructor(title) {
//     this.title = title;
//   }
// }
// const b1 = new Book("JS в действии");
// console.log(b1 instanceof Book); 
// console.log(b1 instanceof Object); 



// class Person {
//   constructor(name, age) {
//     this.name = name; 
//     this.age = age;   
//   }
//   sayHello() {
//     console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); 
//     this.grade = grade; 
//   }

  
//   study() {
//     console.log(`Я учусь в ${this.grade} классе`);
//   }
// }

// const student1 = new Student("Иван", 15, "9А");

// student1.sayHello();
// student1.study();   


// setTimeout(() => {
//   console.log("Привет! Я сработал через 2 секунды");
// }, 2000);

// const intervalId = setInterval(() => {
//   console.log("Каждую секунду работает таймер");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Интервал остановлен");
// }, 5000);


// setTimeout(() => {
//   alert("Привет! Я сработал через 2 секунды");
// }, 2000);

// const intervalId = setInterval(() => {
//   alert("Каждую секунду работает таймер");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   alert("Интервал остановлен");
// }, 5000);


//  console.log('Начало кода...')
//  try{
//     const names = ['Александр', 'Михаил', 'Василий']
//     names.forEach((name)=>{
//         console.log('имя', name)
//     })
//  }catch (error){
//     console.log('Возникает ошибка:', error)
//  }
//  console.log('Конец кода...')

// console.log('Начало кода...')
//  try{
//     const names = undefined
//     names.forEach((name)=>{
//         console.log('имя', name)
//     })
//  }catch (error){
//     console.log('Возникает ошибка:', error)
//  }
//  console.log('Конец кода...')


// console.log('Начало кода...')
//  try{
//     const names = undefined
//     names.forEach((name)=>{
//         console.log('имя', name)
//     })
//  }catch (error){
//     console.log('full error:', error)
//     console.log('name:', error.name)
//     console.log('message:', error.message)
//     console.log('stack:', error.stack)

//  }
//  console.log('Конец кода...')


// console.log('Начало кода...')
//  try {
//     const userJSON = `{
//     "age":28}`
//     const user =JSON.parse(userJSON)
//     const {name, age}=user
//     if(!name){
//         throw 'Имя не заполнена'
//     }
//     console.log(`Привет, ${name}!
//         Твой возраст - ${age}, верно?`)
//  }catch (error){
//     console.log('Возникает ошибка: ', error)
//  }
//  console.log('Конец кода...')

console.log('Начало кода...')
 try {
    const userJSON = `{
    "age":28}`
    const user =JSON.parse(userJSON)
    const {name, age}=user
    if(!name){
        const errorMessage = 'Имя не заполнена'
        throw new Error(errorMessage)
    }
    console.log(`Привет, ${name}!
        Твой возраст - ${age}, верно?`)
 }catch (error){
    console.log('Возникает ошибка: ', error)
 } finally{
 console.log('Конец кода...')

 }