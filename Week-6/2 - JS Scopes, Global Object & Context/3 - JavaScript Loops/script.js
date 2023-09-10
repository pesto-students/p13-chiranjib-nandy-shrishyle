let drawTriangle = (size) => {
  let star = "*";
  let result = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j = j + size) {
      result = result.concat(star);
    }
    console.log(result);
  }
};

drawTriangle(4);
