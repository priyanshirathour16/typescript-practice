function multiply(a :number , b:number , c?:number){
    return (a*b) * (c || 1);
}
console.log(multiply(2, 2));
console.log(multiply(2, 2 , 2));