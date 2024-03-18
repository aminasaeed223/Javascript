// let y = 'amina\"saeed'

// alert(y);
// console.log(y);
// Basics
// operators
// 5 == 5
// this == dont compare data type

// 5===5 
// this one would compare data type as well as value
//  != not equal data type is not compared
//  !== data type is compared
// not operator ! flasify every true statement


// Conditions in javascript
// let age = 14;
// let hascard = "No"

// if(age >= 14 && hascard == 'yes'){
//     alert('You can vote!');

// }else if(age>= 14 && hascard != 'yes'){
//     alert('make your card')

// }else{

//     alert("you cant vote");
// }


//  if 0 then not loggedin but if 1 then loggedin
// if (login == 0){
//     document.write('Login')
// }else{
//     document.write('Logout')
// }
// Ternary operator to use if else statement in one line


// let option = isloggedin == 1 ? "logout": "login";
//     document.write(option)


// // Nullish Coalescing operator
// let user;
// {alert(user ?? Guest user);} To avoid showing undefined 
// if answer is 1, y, yes >> then output ... continue
// if answer is 0, n , no >> then output ..break
let input;
input = 0;
// if (input === 1){
//     Document.write("continue");
// }else if (input === 'y'){
//     Document.write("continue");

// }else if (input === 'yes'){
//     Document.write("continue");

// }else if (input === 0){
//     Document.write("end");

// }else if (input === 'n'){
//     Document.write("end");

// }else if (input === 'no'){
//     Document.write("end");

// }else{
//     Document.write("wrong input");

// }


// Switch Statement 
switch(input){
    case 1:
        Document.write("continue");
        break;
    case 'y' :
        Document.write("continue");
        break;
    case 'yes':
        Document.write("continue");
        break;
    case 0:
        Document.write("continue");
        break;
    case 'n':
        Document.write("continue");
        break;
    case 'no':
        Document.write("continue");
        break;
    default:
        Document.write("wrong input");

}

