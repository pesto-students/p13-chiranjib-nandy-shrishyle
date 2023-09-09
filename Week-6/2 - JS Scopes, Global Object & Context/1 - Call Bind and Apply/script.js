let Calculator = class {
  constructor() {
    //Function to add two numbers
    this.add = (num1, num2) => {
      return parseInt(num1) + parseInt(num2);
    };

    //Function to subtract one number from another.
    this.subtract = (num1, num2) => {
      return parseInt(num1) - parseInt(num2);
    };

    //Function to multiply one number with another.
    this.multiply = (num1, num2) => {
      return parseInt(num1) * parseInt(num2);
    };

    //Funciton to divide one number by another.
    this.divide = (num1, num2) => {
      return parseInt(num1) / parseInt(num2);
    };
  }
};

class ScientificCalculator extends Calculator {
  constructor() {
    super();

    //Function to return square of a number
    this.square = (num1) => {
      return parseInt(num1) ** 2;
    };

    //Funciton to return cube of a number
    this.cube = (num1) => {
      return parseInt(num1) ** 3;
    };

    //Function to return power of a number by second number.
    this.power = (num1, num2) => {
      return parseInt(num1) ** parseInt(num2);
    };
  }
}

//Creating instances of the two classes
let orpat = new Calculator();
let casio = new ScientificCalculator();

// Task 1:
// Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5.
console.log(casio.add(10, 5)); //Invoking the call() Method is not necessary. The Method of the parent class works without involing the call/apply/bind class.

//Task 2:
// Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5.
console.log(casio.subtract(10, 5)); //Invoking the apply method is not necessary. The Method of the parent class works without involing the call/apply/bind class.

//Task 3
//Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result. Bind the "multiplyByTwo" method to the instance of the ScientificCalculator class.
// 1) Creating an empty object
let dell = {};

// 2) Add the method "multiplyByTwo" & "powerOfThree".
dell.multiplyByTwo = (num) => {
  this.num = num;
  console.log(this.num * 2);
  return this.num * 2;
};

dell.powerOfThree = (num) => {
  this.num = num;
  console.log(this.num ** 3);
  return this.num ** 3;
};

// 3) Use the Bind() Method to bind the multiplyByTwo Method in dell object to casio object and storing the resultant function in variable result.
let result = dell.multiplyByTwo.bind(casio, 6);
let result2 = dell.powerOfThree.bind(casio, 10);

// 4) Calling the stored function.
result();
result2();
