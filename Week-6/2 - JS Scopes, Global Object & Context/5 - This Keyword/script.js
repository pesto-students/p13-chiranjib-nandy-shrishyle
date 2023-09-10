//Create a Class "Person".
let Person = class {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.introduce = () => {
      console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I am a ${this.gender} and I am from ${this.nationality}`);
    };
  }
};

//Create three instances of class Person
let shiva = new Person("Shiva", 20, "Male", "India");
let krishna = new Person("Krishna", 21, "Male", "US");
let radha = new Person("Radha", 16, "Female", "Nepal");

//Call the introduce() Method on all thre instances of the class Person.
shiva.introduce();
krishna.introduce();
radha.introduce();

//Create a new class Student which extends class Person
class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
    this.study = () => {
      console.log(`Hello!! I am ${this.name} and I like to study ${this.subject}`);
    };
  }
}

//Create new instance of the class Student and assign values to the instance.
let sudama = new Student("Sudama", 15, "Male", "Mongolia", "Physics");

sudama.introduce();
sudama.study();
