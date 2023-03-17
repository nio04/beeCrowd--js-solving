const first = 100;
const second = 200;
let store = 0;

/*
get numbers by function
first big
second big
result print by function
*/

const getNums = (first, second) => {
  return [first, second];
};

const InputNumbers = getNums(first, second);

const firstBig = (first, second) => {
  const store = [];

  for (let i = first; i >= second; i -= 1) {
    if (i % 13 !== 0) {
      store.push(i);
    }
  }

  return store.reduce((acc, curr) => {
    return acc + curr;
  });
};

const secondBig = (first, second) => {
  const store = [];

  for (let i = second; i >= first; i -= 1) {
    if (i % 13 !== 0) {
      store.push(i);
    }
  }
  return store.reduce((acc, curr) => {
    return acc + curr;
  });
};

const printResult = (nums) => {
  if (nums[0] > nums[1]) return firstBig(...nums);
  else return secondBig(...nums);
};

console.log(printResult(InputNumbers));
