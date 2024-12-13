// let and var ma differnce scope ka ha

// symbol keyword values ko uniques kr deta ha
// = > assignment operator
// ==> comapre values only
// === >> compare both values and type
// jb bhi user se input lein ge wo string type hogi

// primitive (call by value )and non primitive(call by refercne)
// non primitive>> array , objects, functions
// primitve >7 
// null
// Symbol
// String
// Number
// undefined
// Boolean
// bigint

// primitive sare > stack memory
// let username = "   Amina"
// console.log(username.indexOf('A'));
// console.log(username.repeat(3));
// console.log(username.endsWith(''));
// console.log(username.trim());
// // padstart > add any number in fromt of number 
// let num = "123345 667 88 9"
// num = num.padStart(16, '9')
// console.log(num);
// Math.floor(Math.random() * (max-min)+ min)
// function allfoods(...foods){
//     console.log(foods);
    
// }
// const f1 = "Pizza"
// const f2 = "burgr"
// const f3 = "birer"

// allfoods(f1,f2,f3)
const number = [1,2,3,4]
const square = number.map(squares)
function squares(element){
    return Math.pow(element, 2)
}
console.log(square);
// function (){

// }
// function () => this is arrow function
we can store or not in variable 
const hi = () =>= {
    console.log(num1 + num2);
    
}
we can also remove {}
const hi = () => num1 + num2

hi = () => (num1 +num2)>> this also written as arrow function



