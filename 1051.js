/*
Read a value with 2 digits after the decimal point, equivalent to the salary of a Lisarb inhabitant. Then print the due value that this person must pay of taxes, according to the table below.

Remember, if the salary is R$ 3,002.00 for example, the rate of 8% is only over R$ 1,000.00, because the salary from R$ 0.00 to R$ 2,000.00 is tax free. In the follow example, the total rate is 8% over R$ 1000.00 + 18% over R$ 2.00, resulting in R$ 80.36 at all. The answer must be printed with 2 digits after the decimal point.

0.00 <-> 2,000.00        -> without tax
2,000.01 <-> 3,000.00    ->  8%  (1000)
3,000.01 <-> 4,500.00    -> 18%  (1500)
more than 4,500.00       -> 28%
*/

const payTax = (salary) => {
  let taxStore = [];
  const initial = salary - 2000;
  let firstStep = initial - 1000;
  let secondStep = firstStep - 1500;

  if (initial > 1000 && firstStep < 1000) taxStore.push((1000 * 8) / 100);
  if (firstStep < 1000) {
    taxStore.push((firstStep * 18) / 100);
    firstStep = 0;
  }

  firstStep > 1000
    ? taxStore.push((1000 * 8) / 100)
    : taxStore.push((firstStep * 8) / 100);

  firstStep > 1500
    ? taxStore.push((1500 * 18) / 100)
    : taxStore.push((firstStep * 18) / 100);

  secondStep > 0 ? taxStore.push((secondStep * 28) / 100) : taxStore.push(0);

  return taxStore.reduce((acc, curr) => acc + curr).toFixed(2);
};

console.log(payTax(4520.0));
