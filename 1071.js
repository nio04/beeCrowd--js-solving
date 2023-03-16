const first = 6;
const second = -5;

// when first input -> 6 and second input -5, output should be : 5.... but it makes no sense

const sumOfOdd = (first, second) => {
  const store = [];
  if (first > second) {
    for (let i = second; i < first; i += 1) {
      if (Math.abs(i % 2) === 1) store.push(1);
    }
  }
  return store.reduce((acc, curr) => {
    return acc + curr;
  });
};

console.log(sumOfOdd(first, second));
