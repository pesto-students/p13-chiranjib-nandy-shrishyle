//Section 1 ------------------------------------------------
let Vehicle = class {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = () => {
      console.log(`Driving ${this.make} ${this.model}`);
    };
  }
};

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

//Section 2 ------------------------------------------------
let Shape = class {
  constructor() {
    this.calculateArea = () => {};
  }
};

class Circle extends Shape {
  constructor(radius) {
    super();
    this.calculateArea = () => {
      console.log(3.1416 * radius ** 2);
    };
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.calculateArea = () => {
      console.log(side ** 2);
    };
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.calculateArea = () => {
      console.log((base * height) / 2);
    };
  }
}

let circle1 = new Circle(5);
circle1.calculateArea();

let square1 = new Square(5);
square1.calculateArea();

let triangle1 = new Triangle(5, 15);
triangle1.calculateArea();

//Section 3 ------------------------------------------------

let BankAccount = class {
  #accountNumber;
  #balance = 0;
  #accountHolderName;
  constructor(accountNumber, accountHolderName) {
    accountNumber = accountNumber;
    accountHolderName = accountHolderName;
  }
};

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
    this.deposit = (depositAmount) => {
      balance + depositAmount;
    };
    this.withdraw = (withdrawalAmount) => {
      balance - withdrawalAmount;
    };
  }
}

class SavingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);

    this.deposit = (depositAmount) => {
      this.balance + depositAmount;
    };

    this.withdraw = (withdrawalAmount) => {
      if (balance > withdrawalAmount) {
        balance - withdrawalAmount;
      } else {
        console.log("Balance Insuficient");
      }
    };

    this.getBalance = () => {
      console.log(balance);
    };

    this.getAccountNumber = () => {
      console.log();
    };
  }
}

let shrishyle = new SavingAccount("7188", 8000, "Shrishyle");
shrishyle.deposit(5000);
shrishyle.withdraw(2000);
shrishyle.getBalance();
