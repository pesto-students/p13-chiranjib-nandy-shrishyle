let firstValues = [];
let secondValues = [];

let count = 0;
let firstCounter = function counter() {
  return function () {
    count++;
    firstValues.push(count);
  };
};

let secondCounter = function counter() {
  let count = 0;
  return function () {
    count++;
    secondValues.push(count);
  };
};

firstCounter()();
firstCounter()();
firstCounter()();
firstCounter()();
firstCounter()();

secondCounter()();
secondCounter()();
secondCounter()();

console.log(firstValues);
console.log(secondValues);
