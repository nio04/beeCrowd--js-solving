const first = -14;
const second = 21;
const third = 7;

const sort = (...arr) => {
  return arr.sort((a, b) => a - b);
}
console.log(sort(first, second, third));
