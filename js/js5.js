 const year = 2023  

 if(year === 2025){
    console.log('Ура!')
    console.log('Сейчас самое подходящее время, чтобы изучить Javascipt!')
 }else if(year === 3000) {
    console.log('Слишком поздно.')
 }else {
    console.log('Неизвестный год :/')
 }


 const yearr=3000
 const message = yearr === 2024
    ? 'Начинай учиться!'
    : yearr === 3000
        ? 'Нейросети победили'
        : 'Неизвестный год :/'
console.log(message)


const age = 17
const withParent = true
if (age > 18 || withParent){
    console.log('Приходите')
}else {
    console.log('Не совершеннолетним вход закрыт')
}

const moneyInWallet = 5
const iceCreamPrice = 2
const isStoreOpen = false
if(iceCreamPrice < moneyInWallet && isStoreOpen){
    console.log('Вот ваше мороженое!')
}else{
    console.log('Магазин закрыт : (')
}

console.log(!'')
console.log(!'hello')
console.log(!0)
console.log(!111) 

console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(''))
console.log(Boolean('  ')) 


const name ='Максим'
const ages = 20
const hasMuchMoney = false
const hasGoodJob= false
const hasMotivation = true
const hasFreeTime = true
if (name !== 'Максим') {
    console.log('Вы не Максим, позвоте Максима')
}else if (age <16){
    console.log('Ещё рано думать о взрослой жизни')
}else if(
    !hasMuchMoney ||
    !hasGoodJob ||
    hasMotivation && hasFreeTime
){
    console.log('Максиму нужно учить фронтенд')
}else {
    console.log('ты супер!')
}

const a = 0
const b = 100
const result1 = a || b
const result2 = a ?? b
console.log(result1)
console.log(result2)

console.log(!'hello')

/*
№	Твой ответ	Правильный	Верно?	Комментарий
1	A	✅ A	✅ Верно	=== сравнивает строго, выведется "Ура!"
2	A	✅ A	✅ Верно	Тернарный оператор: условие ? если да : если нет
3	C	✅ C	✅ Верно	`
4	B	✅ B	✅ Верно	&& — логическое "И"
5	B	✅ B	✅ Верно	Пустая строка '' → false
6	A	✅ A	✅ Верно	!0 → true
7	B	✅ B	✅ Верно	`0
8	A	✅ A	✅ Верно	?? возвращает a, если он не null/undefined
9	C	✅ C	✅ Верно	! делает логическое отрицание
10	B	✅ B	✅ Верно	`
11	B	✅ B	✅ Верно	'hello' — это truthy, !truthy → false
12	B	✅ B	✅ Верно	?? проверяет только на null и undefined
13	C	❌ B	❌ Ошибка	`!hasMoney
14	A	❌ B	❌ Ошибка	!== — "не равно". Проверяет, что не 'Максим'
15	A	✅ A	✅ Верно	' ' — непустая строка, значит true
*/