const input = 5;

const firstType = (input) => {
  const store = [];

  for (let i = 1; i <= input; i += 1) {
    for (let j = 1; j < 3; j += 1) {
      store.push(i);
    }
  }
  return store;
};

const secondType = (input) => {
  const store = [];

  for (let i = 1; i <= input; i += 1) {
    for (let j = 1; j < 2; j += 1) {
      store.push(i * i);
      store.push(i * i + 1);
    }
  }
  return store;
};

const thirdType = (first, second) => {
  const store = [];

  for (let i = 0; i < first.length; i += 2) {
    const temp = first[i] * second[i];
    store.push(temp);
    store.push(temp + 1);
  }
  return store;
};

const first = firstType(input);
const second = secondType(input);
const third = thirdType(first, second);

const printing = (first, second, third) => {
  return first.map((val, index) => {
    return `${val} ${second[index]} ${third[index]}`;
  });
};

console.log(printing(first, second, third));
