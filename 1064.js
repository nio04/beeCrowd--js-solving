const input = [7, -5, 6, -3.4, 4.6, 12];

const posAvg = (input) => {
  let counter = 0;
  const map = input
    .map((val) => {
      if (val > 0) {
        counter += 1;
        return val;
      }
    })
    .filter((val) => {
      if (val != undefined) return val;
    })
    .reduce((acc, val) => {
      return acc + val;
    });

  // const filter = input.filter(val => {
  //   if (val > 0) return counter += 1;
  // });

  // const reduce = map.reduce((acc, val) => {
  //   return acc + val;
  // });

  return (map / counter).toFixed(1);
};
console.log(posAvg(input));
