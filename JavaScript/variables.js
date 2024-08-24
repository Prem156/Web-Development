let a = 56;
console.log(a);
a = "String";
console.log(a);

var b = "Prem";
{
    var b = "This";     //* var is the globally scoped. redeclared
    console.log(b);     //$ This
}
console.log(b);        //$ This


//?Replace var with the let
var c = "Hello";
{
    let c = "Hlo";      //* let is a Block scoped. non-redeclared
    console.log(c);     //$ Hlo
}
console.log(c);         //$ Hello

const author = "Prem";
//* let author = "Verma"  It throws an error b/c constant cannot be changed

var d;
let f;
// const prem; //* It thorws an error
const prem = 0;
f = "Hlo"
console.log(f)