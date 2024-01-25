interface flower{
    name:string
}
interface flowerFull extends flower{
    count :number
}
const flo : flowerFull ={
    name:"rose",
    count:2
}
console.log(flo);