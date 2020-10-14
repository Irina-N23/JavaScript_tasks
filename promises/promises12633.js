"use strict";

// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:

//  delay(1000)
//   .then(() => alert("Hello!"))
// Такая функция полезна для использования в других промис-цепочках.

// Вот такой вызов... :
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     doSomeThing();
//     resolve();
//   }, ms)
// });
// ...cтанет возможным переписать так:
// return delay(ms).then(doSomething);


function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Result has been received."), ms);
    });
}


const promise = delay(3000);

promise
    .then(result => console.log("Resolved: " + result))
    .catch(error => console.error(error));