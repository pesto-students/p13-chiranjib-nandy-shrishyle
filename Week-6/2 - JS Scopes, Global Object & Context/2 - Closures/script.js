let firstValues = [];
let secondValues = [];

function counter() {
  return function () {
    let count = 0;
    count++;
    firstValues.push(count);
  };
}

let firstCounter = counter();

let secondCounter = counter();

firstCounter();
firstCounter();
firstCounter();
firstCounter();
firstCounter();

secondCounter();
secondCounter();
secondCounter();

console.log(firstValues);
console.log(secondValues);
