function Person() {
  this.name = "yusuf";
  this.age = 21;
  this.greet = function () {
    console.log(this.name + " ," + this.age);
  };
}

Person.prototype.printAge = function () {
  console.log(this.age);
};

let person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);

