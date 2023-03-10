const input = [7, -5, 6, -3.4, 4.6, 12];

const getPositive = input => {
  let counter = 0;

  input.filter(val => {
    if (val > 0) counter += 1;
  })
  return `${counter} valores positivos`;
}

console.log(getPositive(input));
