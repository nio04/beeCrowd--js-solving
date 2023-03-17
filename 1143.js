const input = 5;
const sequence = [];
const square = [];
const cub = [];

for (let i = 1; i <= input; i += 1) {
  sequence.push(i);
  square.push(Math.pow(i, 2));
  cub.push(Math.pow(i, 3));
}

sequence.forEach((val, index) => {
  console.log(`${val} || square: ${square[index]} || cub: ${cub[index]}`);
});
