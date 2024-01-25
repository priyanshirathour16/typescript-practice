// function greet(msg:string , id:number):void{
//  console.log(`welcome ${msg} and my id is ${id}`)
// }
// greet("priyanshi" , 1);
// const greet = (msg:string , id:number):string =>{
//  return `welcome ${msg} and my id is ${id}`;
// }
// const mygreet = greet("priyanshi" , 1);
// console.log(mygreet)
var greet = function (msg, id) { return "welcome ".concat(msg, " and my id is ").concat(id); };
var mygreet = greet("priyanshi", 1);
console.log(mygreet);
