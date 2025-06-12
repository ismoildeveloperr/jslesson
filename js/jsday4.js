// console.log('this глобальный: ', this)
// const user = {
//     name: 'Alexandr',
//     age: 28,
//     logThis:function(){
//         console.log('this в теле метода объекта user: ', this)
//         console.log('this.name:', this.name)
//     },
// }
// user.logThis()

// let anya = {
//   name: "ismoil",
//   sayHi: function() {
//     console.log("Привет, я " + this.name);
//   }
// };

// let oleg = {
//   name: "Олег",
//   sayHi: anya.sayHi
// };

// anya.sayHi()
// oleg.sayHi()

// задача а this
// У тебя есть объект user с именем и функцией sayHi, которая должна выводить приветствие с именем пользователя. Напиши функцию, используя this, чтобы она работала правильно.
// const user = {
//   name: 'Исмоил',
//   sayHi() {
//     console.log(`Привет, меня зовут ${this.name}`);
//   }
// };

// user.sayHi(); 


//задача Округление числа с сохранением двух знаков после запятой



// function roundToTwo(num) {
//   const number1 = 100;
//   return Math.round(num * number1) / number1;
// }

// console.log(roundToTwo(3.14159)); 
// console.log(roundToTwo(1.005));   


//Округление с заданным числом знаков после запятой (универсальная функция)

// function roundTo(num, decimals = 0) {
//   const factor = Math.pow(10, decimals);
//   return Math.round(num * factor) / factor;
// }

// console.log(roundTo(5.6789, 3));  
// console.log(roundTo(123.456, 1)); 