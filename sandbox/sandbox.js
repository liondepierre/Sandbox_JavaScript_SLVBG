// class Student {
//     name = "Yusuf";

//     constructor(){
//         this.age = 21;
//     }

//     greet(){
//         console.log("my name is " + this.name + " and I am " + this.age + " years old");
//     }
// }

function Person (){
    this.name = "yusuf";
    this.age = 21;
    this.greet = function(){
        console.log(this.name + " " + this.age);
    }
}


let student = new Student();
student.greet();