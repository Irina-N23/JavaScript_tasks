"use strict";

const GIVEN_STRING = "JavaScript";
const GIVEN_BOOLEAN = true;

// 1) boolean/string:
alert(GIVEN_BOOLEAN + GIVEN_STRING); // "trueJavaScript"
alert(GIVEN_BOOLEAN * GIVEN_STRING); // NaN
alert(GIVEN_BOOLEAN / GIVEN_STRING); // NaN
alert(GIVEN_BOOLEAN - GIVEN_STRING); // NaN

alert(Boolean(GIVEN_STRING)); // true
alert(Number(GIVEN_STRING)); // NaN

alert(String(GIVEN_BOOLEAN)); // "true"
alert(Number(GIVEN_BOOLEAN)); // 1


// 2) string/string:
const NEW_STRING = "hello ";

alert(NEW_STRING + GIVEN_STRING); // "hello JavaScript"
alert(" 5 " + GIVEN_STRING); // " 5 JavaScript"
alert(NEW_STRING * GIVEN_STRING); // NaN
alert(" 003  " * "2"); // 6
alert(NEW_STRING / GIVEN_STRING); // NaN
alert("96" / "8"); // 12
alert(NEW_STRING - GIVEN_STRING); // NaN

alert(Number(NEW_STRING)); // NaN
alert(Boolean(NEW_STRING)); // true

alert(Number(" 0152  ")); // 152 
alert(Boolean(" 0152  ")); // true
alert(Boolean("")); // false


// 3) string/number:
const GIVEN_NUMBER = 200;

alert(GIVEN_STRING + GIVEN_NUMBER); // "JavaScript200"
alert(GIVEN_STRING * GIVEN_NUMBER); // NaN
alert(GIVEN_STRING / GIVEN_NUMBER); // NaN
alert(GIVEN_STRING - GIVEN_NUMBER); // NaN

alert(Number(GIVEN_STRING)); // NaN
alert(Boolean(GIVEN_STRING)); // true
alert(Boolean("")); // false

alert(String(GIVEN_NUMBER)); // "200"
alert(Boolean(GIVEN_NUMBER)); // true


// 4) number/string:
alert(GIVEN_NUMBER + GIVEN_STRING); // "200JavaScript"
alert(GIVEN_NUMBER * GIVEN_STRING); // NaN
alert(GIVEN_NUMBER / GIVEN_STRING); // NaN
alert(GIVEN_NUMBER - GIVEN_STRING); // NaN

alert(String(GIVEN_NUMBER)); // "200"
alert(Boolean(GIVEN_NUMBER)); // true
alert(Boolean(0)); // false

alert(Number(GIVEN_STRING)); // NaN
alert(Boolean(GIVEN_STRING)); // true
alert(Boolean('')); // false


// 5) number/boolean:
alert(GIVEN_NUMBER + GIVEN_BOOLEAN); // 201
alert(GIVEN_NUMBER * GIVEN_BOOLEAN); // 200
alert(GIVEN_NUMBER / GIVEN_BOOLEAN); // 200
alert(GIVEN_NUMBER - GIVEN_BOOLEAN); // 199

alert(String(GIVEN_NUMBER)); // "200"
alert(Boolean(GIVEN_NUMBER)); // true
alert(Boolean(0)); // false

alert(Number(GIVEN_BOOLEAN)); // 1
alert(Number(false)); // 0
alert(String(GIVEN_BOOLEAN)); // "true"