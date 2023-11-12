let stringArr = ['just','chill', 'man']
let guitars = ['star','war', 5195]
let mixedData = ['just',925, false]

stringArr[0] = 'one'

guitars.push("otis")

mixedData.push(true)

// console.log(guitars);

//declaring any type array
let test =  []

//declaring string type array
let bands: string[] = []


//Tuples
let myTuple: [string, number, boolean] = ["leo", 67,true]

let mixedAr = ["leoDas", 40,false]




//Objects

let myObj: object

myObj = ["name", "sh"]
console.log(typeof myObj);


const exampleObj = {
    name: "john",
    age : 24 ,
    isMarried : false


}


// don't  -----------------  exampleObj.age = "yes"||  exampleObj.name = 88


//Type
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     album: (string | number)[]


// }

//Interface
interface Guitarist  {
    name?: string,
    active?: boolean,
    album: (string | number)[]


}


let EDM: Guitarist = {
    name : "Eric",
    active :false ,
    album : [1978 , 3235, 'JWD79']
}

let pop: Guitarist = {
    name : "Johnson",
    active :true ,
    album : [2013 , 8256, 'glk22']
}

// pop = EDM

console.log(EDM);


//**************************** */

const greetGuitarist = (guitarist: Guitarist) =>{
    if(guitarist.name){
       return `Hello ${guitarist.name}!`
    } 
    return `Hello! Guitarist`
}

console.log(greetGuitarist(pop))

//Enum
/*  
 "Unlike most TypeScript features , 
 Enums are not a type-level addition to javascript but some thing added
 to the language and runtime"
 */

 enum Grade{
    U=96,
    D,
    C,
    B,
    A
 }

 console.log(Grade.U);
 console.log(Grade.C);
 