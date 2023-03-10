const input = [7, -5, 6, -4, 12];

const getEven = (input) => {
  let counter = 0;

  const map = input.map((val) => {
    if (val % 2 === 0) counter += 1;
  });
  return `${counter} valores pares`;
};

console.log(getEven(input));
