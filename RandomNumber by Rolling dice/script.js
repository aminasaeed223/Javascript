
let x;
let y;
let z;

document.getElementById("btn").onclick = function(){
     x = Math.floor(Math.random()*6) +1
     y = Math.floor(Math.random()*6) +1
     z = Math.floor(Math.random()*6) +1
    document.getElementById("x").innerHTML = x
    document.getElementById("y").innerHTML = y
    document.getElementById("z").innerHTML = z
}

// let age = 18
// let result = age<=18? 'Whats your age?';
// console.log(result);

// let nationality = 'Pakistani';
// let age1 = 20;
// if(nationality == 'Pakistani' && age1 == 20){
//     console.log('You are eligible');
    
// }else{
//     console.log('You are not eligible');
    
// }

