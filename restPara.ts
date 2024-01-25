function sum2( a:number , b : number , ...rest:number[]) :number{
    return a + b + rest.reduce((p, c) => p + c );
}
console.log(sum2(10, 10, 10, 10, 10));