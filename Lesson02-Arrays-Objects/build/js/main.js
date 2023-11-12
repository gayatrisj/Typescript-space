"use strict";
let stringArr = ['just', 'chill', 'man'];
let guitars = ['star', 'war', 5195];
let mixedData = ['just', 925, false];
stringArr[0] = 'one';
guitars.push("otis");
mixedData.push(true);
// console.log(guitars);
//declaring any type array
let test = [];
//declaring string type array
let bands = [];
//Tuples
let myTuple = ["leo", 67, true];
let mixedAr = ["leoDas", 40, false];
//Objects
let myObj;
myObj = ["name", "sh"];
console.log(typeof myObj);
const exampleObj = {
    name: "john",
    age: 24,
    isMarried: false
};
let EDM = {
    name: "Eric",
    active: false,
    album: [1978, 3235, 'JWD79']
};
let pop = {
    name: "Johnson",
    active: true,
    album: [2013, 8256, 'glk22']
};
// pop = EDM
console.log(EDM);
//**************************** */
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name}!`;
    }
    return `Hello! Guitarist`;
};
console.log(greetGuitarist(pop));
//Enum
/*
 "Unlike most TypeScript features ,
 Enums are not a type-level addition to javascript but some thing added
 to the language and runtime"
 */
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 96] = "U";
    Grade[Grade["D"] = 97] = "D";
    Grade[Grade["C"] = 98] = "C";
    Grade[Grade["B"] = 99] = "B";
    Grade[Grade["A"] = 100] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.C);
