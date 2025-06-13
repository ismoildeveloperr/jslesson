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




const name = 'Александр'
const emptyStr =''
const srtWithOneSpace = ' '

console.log(`Длина строки '${name}': `, name.length)
console.log(`Длина строки '${emptyStr}': `, emptyStr.length)
console.log(`Длина строки '${srtWithOneSpace}': `, srtWithOneSpace.length)
console.log('123'.length)

const names = 'ismoil'
console.log(names[0])
console.log(names[names.length-1])
console.log(names.at(0))
console.log(names.at(1))
console.log(names.at(-1))
console.log(names.toLowerCase())
console.log(names.toUpperCase())

const message = '      ismoil!     '
console.log(message)
console.log(message.length)
const messagetrim = message.trim()
console.log(messagetrim)

const messagess = 'hello every one good bye'
console.log(
    messagess.indexOf('every one')
)

const messagesss = 'hello every one good bye'
console.log(
    messagesss.includes('hellok')
)

const messagessss = 'hello every one good bye'
console.log(
    messagessss.startsWith('hell')
)
console.log(
    messagessss.endsWith('by')
)
const namess = 'Ismoil'

console.log(namess.substring(0,5))
console.log(namess.substring(5,0))
console.log(namess.substring(4))
console.log(namess.slice(0,4))
console.log(namess.slice(4,0))
console.log(namess.slice(-4))
console.log(namess.repeat(300))

const messaged = 'Я изучаю бекенд бекенд бекенд '
console.log(messaged.replace('бекенд', 'фронтенд'))
console.log(messaged.replaceAll('бекенд', 'фронтенд'))

const str = '+7(999) 999-99-99'
console.log(str.replace(/\d/g, '#'))

const strr = 'Привет мир'
console.log(strr.split(', '))

const value = prompt('Введите ваше имя:')
const clearValue= value.trim().toLowerCase()
if(clearValue.length===0){
    alert('Ошибка! Имя не может быть пустым.')
}
if(clearValue.includes('админ')){
    alert('Ошибка! вы не можете это выбират.')
    }


/*
№	Вопрос (сокращённо)	Варианты ответов	Твой ответ	Правильный ответ	Результат
1	Длина строки 'Александр'?	A)8 B)9 C)10 D)Ошибка	B	B	✅ Правильно
2	Длина пустой строки ''?	A)1 B)0 C)undefined D)Ошибка	B	B	✅ Правильно
3	Длина строки с одним пробелом ' '?	A)0 B)1 C)2 D)Ошибка	B	B	✅ Правильно
4	Длина строки '123'?	A)2 B)3 C)'3' D)Ошибка	C	B	❌ Неправильно
5	Что вернёт names[0] если names = 'ismoil'?	A)'i' B)'s' C)'l' D)Ошибка	A	A	✅ Правильно
6	Что вернёт names.at(-1)?	A)'' B)Ошибка C)последний символ D)первый символ	C	C	✅ Правильно
7	Что выведет names.toLowerCase()?	A)'Ismoil' B)'ismoil' C)'ISMOIL' D)Ошибка	B	B	✅ Правильно
8	Что выведет names.toUpperCase()?	A)'ISMOIL' B)'ismoil' C)Ошибка D)'Ismoil'	A	A	✅ Правильно
9	Что делает trim() на ' ismoil! '?	A)Удаляет пробелы в начале B)в конце C)с обеих сторон D)Удаляет воскл. знак	C	C	✅ Правильно
10	Длина строки до trim()?	A)12 B)14 C)17 D)Зависит от браузера	—	C	⚠️ Нет ответа
11	Что делает indexOf('every one') в строке?	A)Возвращает индекс B)Заменяет C)Удаляет D)true/false	A	A	✅ Правильно
12	Что вернёт includes('hellok')?	A)true B)false C)'hello' D)Ошибка	B	B	✅ Правильно
13	Что делает startsWith('hell')?	A)Проверяет начало B)Проверяет содержание C)Заменяет D)Ошибка	A	A	✅ Правильно
14	Что делает endsWith('by')?	A)Проверяет конец B)Удаляет C)Возвращает D)Ошибка	A	A	✅ Правильно
15	Что выведет namess.substring(5,0) при Ismoil?	A)'Ismoi' B)'l' C)'Ismoi' D)Ошибка	A	A	✅ Правильно
16	Что вернёт slice(-4) при Ismoil?	A)'moil' B)'Ismo' C)'Ism' D)'oil'	A	A	✅ Правильно
17	Что делает repeat(300)?	A)Повторяет 300 раз B)Ошибка C)30 раз D)Создаёт массив	A	A	✅ Правильно
18	Что делает replace('бекенд', 'фронтенд')?	A)Заменяет все B)Первое только C)Удаляет D)Ошибка	B	B	✅ Правильно
19	Что делает replaceAll('бекенд', 'фронтенд')?	A)Первое только B)Все вхождения C)Ошибка D)Добавляет	B	B	✅ Правильно
20	Что делает .replace(/\d/g, '#')?	A)Заменяет первую цифру B)Все цифры на # C)Удаляет цифры D)Ошибка	B	B	✅ Правильно
*/