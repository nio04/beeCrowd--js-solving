const firstBig = (first, second) => {
  let sum = 0;
  let sequence = [];
  for (let i = second; i <= first; i += 1) {
    sum += second;
    sequence.push(i);
  }
  sequence.push(sum);
  return sequence;
};
// console.log(firstBig(10, 5))

const secondBig = (first, second) => {
  let sum = 0;
  let sequence = [];
  for (let i = first; i <= second; i += 1) {
    sum += first;
    sequence.push(i);
  }
  sequence.push(sum);
  return sequence;
};

// console.log(secondBig(5, 10));

function setNumbers(first, second) {
  if (first - second > 0) return firstBig(first, second);
  else {
    return secondBig(first, second);
  }
}

const setNums = setNumbers(50, 10);

function printSumSequence(result) {
  const sum = result.splice(result.length - 1, 1);
  console.log(...result, "Sum: ", ...sum);
}
printSumSequence(setNums);
