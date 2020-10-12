"use strict";

const currentDate = new Date();

// 1. Get the current date, print to the console:
console.log(`Current date: ${currentDate.getDate()}.`);

// 2. Get the day, month and year of the current date and separately output to the console:
console.log(`Current date: ${currentDate.getDate()}.`);

console.log(`Current month is ${currentDate.getMonth()} if months are counted from 0.`);
console.log(`Current month is ${currentDate.getMonth() + 1} if months are counted from 1`
            + ` as generally used.`);

console.log(`Current year: ${currentDate.getFullYear()}.`);



// 3. Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

// Например:
// var d = new Date(2014, 0, 30); // 30 января 2014
// alert( formatDate(d) ); // '30.01.14'

// P.S. Обратите внимание, ведущие нули должны присутствовать,
// то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.

const dateForFormatting = new Date(2014, 0, 30);

function formatDate(date) {
    let chosenDate = date.getDate();
    if (chosenDate < 10) {
        chosenDate = "0" + chosenDate;
    }

// Let's suppose that months are counted from 1 as generally used:
    let chosenMonth = date.getMonth() + 1;
    if (chosenMonth < 10) {
        chosenMonth = "0" + chosenMonth;
    }

    let chosenYear = String(date.getFullYear());
    chosenYear = chosenYear.charAt(2) + chosenYear.charAt(3);

    return `${chosenDate}.${chosenMonth}.${chosenYear}`;
}

alert(formatDate(dateForFormatting));