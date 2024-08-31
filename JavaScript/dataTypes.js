//? Primitive Data Types
/*
N -- null
N -- Number
S -- String
S -- Symbol
B -- Boolean
B -- Bigint
U -- undefined
*/

let a = null;
let b = 456;
let c = "Prem_Verma";
let d = Symbol("I am a new Symbol");
let e = true;
let f = BigInt(47575) + BigInt(4);
let g = undefined;      //* We also write like this let g
console.log(a,b,c,d,e,f,g);
console.log(typeof d)

//? Non-Primitive DataTypes (OBJECTS)
//* Object is used for Mapping
const item = {
    "Prem" : true,
    "Aman" : false,
    "Rohan" : 56,
    "Amit" : undefined
}
console.log(item["Prem"])
console.log(item["abc"])
