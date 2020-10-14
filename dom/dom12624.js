"use strict";

// 1. Для страницы:

// <html>
// <body>
//    <div>Пользователи:</div>
//    <ul>
//      <li>Джон</li>
//      <li>Пит</li>
//    </ul>
// </body>
// </html>

// ...напишите код, как получить:
// а) элемент <div>?
console.log(document.body.firstElementChild);

// б) <ul>?
console.log(document.body.children[1]);

// в) второй <li> (с именем Пит)?
console.log(document.body.children[1].children[1]);
// или:
console.log(document.body.lastElementChild.lastElementChild);



// 3. Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
// td.style.backgroundColor = 'red';

const table = document.body.firstElementChild;
const numberOfTableRows = table.rows.length;
let coloredCells = [];

for (let i = 0; i < numberOfTableRows; i++) {
    coloredCells.push(i + ":" + i);
    table.rows[i].cells[i].style.backgroundColor = "red";
}

console.log(`Cells which have been colored:\n ${coloredCells}`);