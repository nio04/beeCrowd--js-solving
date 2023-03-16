const input = [6.5, 4.3, 6.2];
const weight = [2, 3, 5];

const getWeightAverage = (input, weight) => {
  const weightMatch = [];
  const weightNonMatch = [];

  // ! weight summing
  const weightSum = weight.reduce((acc, curr) => {
    return acc + curr;
  });

  // ! check if sum is equal to 10 or 100, if yes, apply first step formula
  if (weightSum === 10 || weightSum === 100) {
    for (let i = 0; i < input.length; i += 1) {
      weightMatch.push(input[i] * (weight[i] / weightSum));
    }
  } else {
    for (let i = 0; i < input.length; i += 1) {
      weightNonMatch.push(input[i] * weight[i]);
    }
  }

  // ! check if sum is equal to 10 or 100, if yes, apply second step formula and RETURN
  if (weightSum === 10 || weightSum === 100) {
    const weightAverageMatched = weightMatch.reduce((acc, curr) => {
      return acc + curr;
    });
    return weightAverageMatched.toFixed(1);
  } else {
    const weightAverageNonMatched =
      weightNonMatch.reduce((acc, curr) => {
        return acc + curr;
      }) / weightSum;
    return weightAverageNonMatched.toFixed(1);
  }
};

console.log(getWeightAverage(input, weight));
