const input = 10;

const getAllOdd = (input) => {
  for (let i = 0; i < input; i += 1) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

getAllOdd(input);
