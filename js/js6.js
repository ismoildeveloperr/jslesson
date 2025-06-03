alert("Привет!");

const message = "Привет из message";
alert(message);

alert("hello 1");
console.log("hello 2");
alert("hello 3");
console.log("hello 4");

const userAge = prompt("Сколько тебе лет?", 18);

if (userAge >= 18) {
  console.log("Ты взрослый");
} else {
  console.log("Ты маленький");
}

const userAged = Number(prompt("сколько тебе лет?"));
if (userAged === 0) {
  console.log("Такого возраста не может быть!");
} else {
  console.log(`Твой возраст: ${userAged}`);
}

const isUserReady = confirm("Ты готов?");

if (isUserReady) {
  console.log("Начинаем!");
} else {
  console.log("Ладно, подождем...");
}

const age = +prompt("Сколко тебе лет?");

switch (age) {
  case 0: {
    console.log("Такого возраста не бывает!");
    break;
  }
  case 18: {
    console.log("Не верю, покажи паспорт");
    break;
  }
  case 1000: {
    console.log("это ты врёш");
    break;
  }
  default: {
    console.log(`твой возраст: ${age}`);
  }
}

const aged = +prompt("Сколько тебе лет?");
switch (true) {
  case aged < 1: {
    console.log("Такого возраст не бывает");
    break;
  }
  case aged === 18: {
    console.log("Не верю, покажи паспорт.");
    break;
  }
  case aged > 0 && age <= 125: {
    console.log(`Твой возраст: ${aged}`);
    break;
  }
  case aged > 125: {
    console.log("Вампир что ли?");
    break;
  }
  default: {
    console.log("Возраст введен некорректно");
  }
}

/*
№	Вопрос	Твой ответ	Правильный ответ	Комментарий
1	Что делает prompt()?	B	✅ B	Верно — открывает окно для ввода данных
2	Какой тип возвращает prompt()?	C	✅ C	Верно — prompt() всегда возвращает строку (string)
3	Что делает +prompt(...)?	B	✅ B	Верно — + преобразует строку в число
4	Что делает confirm()?	C	✅ C	Верно — показывает окно "ОК / Отмена" и возвращает true или false
5	Что выведет, если нажать "Отмена" в confirm()?	C	✅ C	Верно — confirm() вернёт false, значит пойдёт в else
6	Что делает switch(true)?	C	✅ C	Верно — позволяет использовать логические условия внутри case
*/

const names = prompt("Напиши имя");
if (names === "Али") {
  console.log("Привет Али");
} else {
  console.log("Ты кто такой?");
}

const ageAge = +prompt("Сколько тебе лет");
switch (true) {
  case ageAge <= 0 || ageAge > 125 || isNaN(ageAge): {
    console.log("Ошибка");
    break;
  }
  case ageAge < 2: {
    console.log("Младенец");
    break;
  }
  case ageAge >= 2 && ageAge <= 12: {
    console.log("Ребёнок");
    break;
  }
  case ageAge >= 13 && ageAge <= 17: {
    console.log("Подросток");
    break;
  }
  case ageAge >= 18 && ageAge <= 60: {
    console.log("Взрослый");
    break;
  }
  case ageAge > 60: {
    console.log("Пенсионер");
    break;
  }
}
