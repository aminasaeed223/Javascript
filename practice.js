// // Objects

// // Two types of creating an Object
// // 1. Constrcutor
// // 2. Literal

// // 1. Constructor> object.create method where singleton is formed
// // 2. no singleton is formed
// const mysym = Symbol("hithere")
// const myobj = {
//     name: "Amina",
//     age: 21,
//     [mysym]:"hithere",
//     school:"Beacon house"
// } 
// console.log(typeof myobj[mysym]);
// // Object.freeze(myobj)
// myobj.name = "Amina Saeed"
// console.log(myobj);
// myobj.greeting = funtion(){
//     console.log(`Hello ${this.name}`);
    
// }
// console.log(myobj.greeting());
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
    
}







