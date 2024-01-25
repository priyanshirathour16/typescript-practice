var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    Person.prototype.getname = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("priyu");
console.log(person.getname());
