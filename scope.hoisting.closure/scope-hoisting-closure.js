"use strict";

// 4. Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Например: sum(1)(2) = 3

function sum(a) {
    return (b) => (a + b);
}

alert(sum(5)(-1));



// 5. Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

const arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return (c) => (c >= a && c <= b);
}

alert(arr.filter(inBetween(3, 6)));


function inArray(arrayOfElementsToFind) {
    return (element) => arrayOfElementsToFind.includes(element);
}

alert(arr.filter(inArray([1, 2, 10])));



// 6. У нас есть массив объектов, который нужно отсортировать:
// let users = [
//  { name: "John", age: 20, surname: "Johnson" },
//  { name: "Pete", age: 18, surname: "Peterson" },
//  { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// Обычный способ был бы таким:
// users.sort((a, b) => a.name > b.name ? 1 : -1);  // по имени

// Можем ли мы сделать его короче, чтобы вместо функции, мы просто писали byField(fieldName)?
// users.sort(byField("name"));

// Напишите функцию byField, которая может быть использована для этого.

const users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(chosenField) {
    return (a, b) => a[chosenField] > b[chosenField] ? 1 : -1;
}

users.sort(byField("name"));
users.forEach(user => alert(user.name));

users.sort(byField("surname"));
users.forEach(user => alert(user.surname));