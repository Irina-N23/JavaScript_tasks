// IF/ELSE & ?
/*
1. Перепишите конструкцию if с использованием условного оператора '?':
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

let result;
result = (a + b < 4) ? 'Мало' : 'Много';

// Еще более кратко:  let result = (a + b < 4) ? 'Мало' : 'Много';


/*
2. Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '';



// SWITCH:
/*
1. Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
  default:
    alert( 'We hope that this page looks ok!' );
}
*/

let browser = prompt('Which browser do you use?', '');

if (browser === 'Edge') {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' 
           || browser === 'Safari' || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}


/*
2. Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}



// OPERATORS:
/*
1. Исправьте сложение:
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12
*/

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 3 (prompt возвращает строку, => преобразуем a и b в числа с помощью унарного +)