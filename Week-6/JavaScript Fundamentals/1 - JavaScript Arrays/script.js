function divideArray(arg) {
  let evenNums = [];
  let oddNums = [];
  arg.forEach((item) => {
    if (item % 2 === 0) {
      evenNums.push(item);
    } else {
      oddNums.push(item);
    }
  });
    console.log(`Even Number Array : ${evenNums.sort()}`);
    console.log(`Odd Number Array : ${oddNums.sort()}`);
}

divideArray([4, 2, 9, 1, 8]);
