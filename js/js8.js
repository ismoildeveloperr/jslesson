// function logHello(){
//     console.log('Привет')
// }

// logHello()
// logHello()
// logHello()

// const message = 'Привет'
// function logMessage(){
//     console.log(message)
// }
// logMessage()

// console.log(`${message}, друг!`)


// function logMessage(message, count){
//     for(let i = 0; i< count; i++){
//         console.log(message)
//     }
// }
// logMessage('Привет!', 3)
// logMessage('Пока', 2)


// const message='Привет'
// function logMessage(message, count){
//     message=`(((${message})))`
//     for (let i = 0; i<count; i++){
//         console.log(message);
//     }
// }

// logMessage(message, 3)
// console.log(message);
// const globalMessage='Привет'
// function logMessage(message = 'tttt', count=10){
//     const messageFormatted =`(((${message})))`
//     for (let i = 0; i<count; i++){
//         console.log(messageFormatted);
//     }
// }

// logMessage(undefined, 10)

// function sumFiveNumbers(
//     num5,
//     num1=100,
//     num2=100,
//     num3=100,
//     num4=100,
// ){
//     const sum = num1+num2+num3+num4+num5

//     console.log(`Сумма чисел равна ${sum}`)
// }
// sumFiveNumbers(
//     1000
// )


function getAgeType(age){
    if(typeof age !== 'number'){
        return 'Возраст указан некорректно'
    }
    if(age<1 || age >125){
        return 'Такого возраст нету'
    }
    if(age<18){
        return 'Ты маленький'
    }
    return 'Взрослый'
}

console.log(getAgeType(10))

// №	Вопрос	Твой ответ	Правильный ответ	Результат
// 1	Уровень 2 — Вложенные переменные	C	C	✅ Правильно
// 2	Параметры по умолчанию	B	B	✅ Правильно
// 3	Hoisting var	B	B	✅ Правильно
// 4	Логическое выражение `		`	A
// 5	Порядок вызова функций	C	C	✅ Правильно

// №	Вопрос	Твой ответ	Правильный ответ	Результат
// 1	Уровень 3 — Локальные переменные	B	B	✅ Правильно
// 2	Замыкание и inner функция	B	B	✅ Правильно
// 3	return и console.log после	C	C	✅ Правильно
// 4	Оператор `		` и строки	C
// 5	Передача объектов по ссылке	A	B	❌ Ошибка

