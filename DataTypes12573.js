let givenString = "JavaScript";
let givenBoolean = true;

// 1) boolean/string:
alert(givenBoolean + givenString); // "trueJavaScript"
alert(givenBoolean * givenString); // NaN
alert(givenBoolean / givenString); // NaN
alert(givenBoolean - givenString); // NaN

alert(Boolean(givenString)); // true
alert(Number(givenString)); // NaN

alert(String(givenBoolean)); // "true"
alert(Number(givenBoolean)); // 1


// 2) string/string:
let newString = "hello ";

alert(newString + givenString); // "hello JavaScript"
alert(" 5 " + givenString); // " 5 JavaScript"
alert(newString * givenString); // NaN
alert(" 003  " * "2"); // 6
alert(newString / givenString); // NaN
alert("96" / "8"); // 12
alert(newString - givenString); // NaN

alert(Number(newString)); // NaN
alert(Boolean(newString)); // true

alert(Number(" 0152  ")); // 152 
alert(Boolean(" 0152  ")); // true
alert(Boolean("")); // false


// 3) string/number:
let givenNumber = 200;

alert(givenString + givenNumber); // "JavaScript200"
alert(givenString * givenNumber); // NaN
alert(givenString / givenNumber); // NaN
alert(givenString - givenNumber); // NaN

alert(Number(givenString)); // NaN
alert(Boolean(givenString)); // true
alert(Boolean("")); // false

alert(String(givenNumber)); // "200"
alert(Boolean(givenNumber)); // true


// 4) number/string:
alert(givenNumber + givenString); // "200JavaScript"
alert(givenNumber * givenString); // NaN
alert(givenNumber / givenString); // NaN
alert(givenNumber - givenString); // NaN

alert(String(givenNumber)); // "200"
alert(Boolean(givenNumber)); // true
alert(Boolean(0)); // false

alert(Number(givenString)); // NaN
alert(Boolean(givenString)); // true
alert(Boolean('')); // false


// 5) number/boolean:
alert(givenNumber + givenBoolean); // 201
alert(givenNumber * givenBoolean); // 200
alert(givenNumber / givenBoolean); // 200
alert(givenNumber - givenBoolean); // 199

alert(String(givenNumber)); // "200"
alert(Boolean(givenNumber)); // true
alert(Boolean(0)); // false

alert(Number(givenBoolean)); // 1
alert(Number(false)); // 0
alert(String(givenBoolean)); // "true"