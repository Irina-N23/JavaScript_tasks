"use strict";

// 1) Напишите регулярное выражение, которое соответствует цветам в формате #abc или #abcdef.
// То есть: # и за ним 3 или 6 шестнадцатеричных цифр.
// P.S. Это должно быть ровно 3 или 6 шестнадцатеричных цифр.
// При этом значения с 4-мя цифрами типа #abcd не должны совпадать в результат.

const regexp = /#([a-f\d]{3}){1,2}\b/gi;
const text = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log(text.match(regexp));



// 2) Напишите регулярное выражение, которое ищет любые десятичные числа,
// включая целочисленные, с плавающей точкой и отрицательные.

const regexpForTaskTwo = /-?\d+(\.\d*)?/g;
const string = "-1.5 0 2 -123.4.";

console.log(string.match(regexpForTaskTwo));



// 3) Арифметическое выражение включает два числа и оператор между ними: "+", "-", "*" или "/".
// Создайте функцию parse(expr), которая принимает выражение и возвращает массив из трёх элементов:
// первое число, оператор, второе число.

function parse(expression) {
    const matchingResult = expression
                             .match(/(-?\d+(?:\.\d+)?)\s*([-+/*])\s*(-?\d+(?:\.\d+)?)/);
    matchingResult.shift();
    return matchingResult;
}

const [a, operator, b] = parse("1.2 * 3.4");

console.log(a);
console.log(operator);
console.log(b);



// 4) MAC-адрес сетевого интерфейса состоит из 6-ти двузначных шестнадцатеричных чисел, разделённых двоеточиями.
// Напишите регулярное выражение, которое проверит, является ли строка MAC-адресом.

const regexpForTaskFour = /^([A-F\d]{2}:){5}([A-F\d]{2})$/;

console.log(regexpForTaskFour.test('01:32:54:67:89:AB'));
console.log(regexpForTaskFour.test('0132546789AB'));
console.log(regexpForTaskFour.test('01:32:54:67:89'));
console.log(regexpForTaskFour.test('01:32:54:67:89:ZZ'));