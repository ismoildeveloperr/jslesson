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
