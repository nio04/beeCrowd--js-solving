const input = 8;

const getNextsOdd = (input) => {
  let counter = 0;

  for (let i = input; i < input * 100; i += 1) {
    if (i % 2 !== 0) {
      console.log(i);
      counter += 1;
      if (counter > 5) break;
    }
  }
};

getNextsOdd(input);
