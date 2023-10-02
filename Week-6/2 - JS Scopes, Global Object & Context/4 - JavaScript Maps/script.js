let calcWordFrequencies = () => {
  let map1 = new Map();
  let input = window.prompt();
  let array1 = input.split(" ");
  console.log(array1);
  array1.forEach((item) => {
    if (map1[item]) {
      map1[item] += 1;
    } else {
      map1[item] = 1;
    }
  });
  console.log(map1);
};

calcWordFrequencies();
