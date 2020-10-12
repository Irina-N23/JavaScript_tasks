"use strict";

// 1. Create a function of adding two numbers.
function countSum(firstNumber, secondNumber) {
    return (+firstNumber + +secondNumber);
}

alert(countSum(105, 11));

// более кратко:
const countSumOfTwoNumbers = (firstNumber, secondNumber) => +firstNumber + +secondNumber;
alert(countSumOfTwoNumbers(105, 11));



// 2. Create a  function of determining the name (if your name, then hello + name).
const VALID_NAME = "John";
let userName = prompt("Just input your name!", "")

function greetUser(chosenUserName) {
    if (chosenUserName === VALID_NAME) {
        alert(`Hello, ${userName}!`);
    } else {
        alert(`Name "${userName}" is not valid.`);
    }
}

greetUser(userName);



// 3. Create of calculating the type of argument and output to the console.
 function logTypeOfArgument(argument) {
    return typeof argument;
 }

logTypeOfArgument(true);



// 4. Create a function of selecting even elements of the array (returns a new array).
const array = [1, 21, 452, 20, 6, 337];

function getArrayWithEvenNumbers() {
    let arrayWithEvenNumbers = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayWithEvenNumbers.push(array[i]);
        }
    }
    return arrayWithEvenNumbers;
}

alert(getArrayWithEvenNumbers());


function getArrayOfNumbersWithEvenPosition() {
    let arrayOfNumbersWithEvenPosition = [];
    
    for(let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arrayOfNumbersWithEvenPosition.push(array[i]);
        }
    }
    return arrayOfNumbersWithEvenPosition;
}

alert(getArrayOfNumbersWithEvenPosition());



/*
Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

function ask(question, yes, no) {
    (confirm(question)) ? yes() : no();
  }

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert('Вы отменили выполнение.')
);