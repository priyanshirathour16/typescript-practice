class Person{
    public constructor(private name :string){
        this.name = name;
    }
    public getname():string{
        return this.name;
    }
}

let person = new Person("priyu");
console.log(person.getname());