const input = 6;

const getEvenSquare = (input) => {
  for (let i = 1; i <= input; i += 1) {
    if (i % 2 === 0) {
      console.log(`${i} ^ 2 = ${Math.pow(i, 2)}`);
    }
  }
};

getEvenSquare(input);
