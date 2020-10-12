"use strict";

// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
// a) Создайте пустой объект user.
let user = {};    // или: let user = new Object();

// b) Добавьте свойство name со значением John.
user.name = "John";

// c) Добавьте свойство surname со значением Smith.
user.surname = "Smith";

// d) Измените значение свойства name на Pete.
user.name = "Pete";

// e) Удалите свойство name из объекта.
delete user.name;



// 2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

function isEmpty(givenObject) {
    for (let key in givenObject) {
        return false;
    }
    return true;
}

let schedule = {};
alert(isEmpty(schedule));

schedule["8:30"] = "get up";
alert(isEmpty(schedule));



// 4. У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let countTotalSalary = (salariesInfo) => {
    let sum = 0;

    for (let key in salariesInfo) {
        sum += salariesInfo[key];
    }
    return sum;
}

alert(countTotalSalary(salaries));



// 5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:
// до вызова функции:
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// multiplyNumeric(menu);

// после вызова функции:
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(objectToChange) {
    for (let key in objectToChange) {
        if (typeof objectToChange[key] === "number") {
            objectToChange[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (let key in menu) {
    alert(key + ": " + menu[key]);
}

multiplyNumeric(menu);
for (let key in menu) {
    alert(key + ": " + menu[key]);
}