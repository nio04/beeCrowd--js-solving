const input = [-5, 0, -3, -4, 12];

const getInfo = (input) => {
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  input.map((val) => {
    if (val > 0) positive += 1;
    if (val < 0) negative += 1;
    if (val % 2 === 0) even += 1;
    if (val % 2 !== 0) odd += 1;
  });

  return `positive: ${positive}, negative: ${negative}, even: ${even}, odd: ${odd}`;
};

console.log(getInfo(input));
