const first = 7;
const second = 21;
const third = -14;

const sort = (...arr) => {
  return arr.sort((a, b) => a - b);
}
console.log(sort(first, second, third));
