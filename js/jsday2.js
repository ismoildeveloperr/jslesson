const a = +prompt("Напиши число a");
const b = +prompt("Напиши число b");
const op = prompt("Напиши операцию (+, -, *, /)");
if (isNaN(a) || isNaN(b)) {
    alert("Пожалуйста, введите корректные числа.");
}
switch (op) {
    case "+":
        alert(`Сумма чисел a и b равна ${a + b}`);
        break;
    case "-":
        alert(`Разность чисел a и b равна ${a - b}`);
        break;
    case "*":
        alert(`Произведение чисел a и b равно ${a * b}`);
        break;
    case "/":
        if (b === 0) {
            alert("На ноль делить нельзя!");
        } else {
            alert(`Частное чисел a и b равно ${a / b}`);
        }
        break;
    default:
        alert("Неизвестная операция");
}

const age = +prompt("Сколько тебе лет?");
if(age >= 18){
    console.log("доступ разрешён");
}else{
    console.log("доступ запрещён");
}

for(i=1; i <= 10; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
}

let choice;

do {
  choice = prompt(
    "Выберите действие:\n" +
    "1 - Показать приветствие\n" +
    "2 - Выполнить цикл от 1 до 5\n" +
    "3 - Показать текущее время\n" +
    "0 - Выход"
  );

  switch (choice) {
    case "1":
      alert("Привет, пользователь!");
      break;
    case "2":
      for (let i = 1; i <= 5; i++) {
        console.log(i);
      }
      break;
    case "3":
      alert(new Date().toLocaleTimeString());
      break;
    case "0":
      alert("Выход из меню. Пока!");
      break;
    default:
      alert("Неизвестный выбор. Попробуйте снова.");
  }

} while (choice !== "0");


