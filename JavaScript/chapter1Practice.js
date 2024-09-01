//* Q1) Create a variable of type string ad try to add a numer to it
let a = "Prem";
let b = 7;
let c = a + b
console.log(c)


//* Q2) Use typeof operator to find th datatype of the string in last question 
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)   //$ String


//* Q3) Create a constant object in javascript. Can you change it to hold a number later
const item = {
    name : "Prem",
    section : 1,
    isPrincipal : false
}
// item = "hlo"        //$ Give the error


//* Q4) Try to add a new key to the const object in problem 3. were you able to do it?
 item['Friend'] = "Shubham"         //* yes we can
 item['name'] = "verma"         
 console.log(item)
//! We can add(modify) or delete the values in the const (object)


//* Q5) Write a js program to Create a Word meaning dictionary of 5 words
const dic = {
    appreciate : "to enjoy something or to understand the value of somebody/something",
    gluten : "a sticky substance that is found in grains that we make into flour, for example wheat",
    feasible : "possible to do",
    conscientious : " careful to do something correctly and well",
    democracy : "a system in which the government of a country is elected by the people"
}
console.log(dic.feasible)
console.log(dic["gluten"])