let second = 1;
let limit = 3;

for (let i = 0; i <= 2; i += 0.2) {
  // console.log(i.toFixed(1))
  for (let j = second; j <= limit; j += 1) {
    console.log(i, j);
    // if (j === 3.4) console.log(second, limit, "--special");
    if (j == limit) {
      second += 0.2;
      limit += 0.2;
      // console.log(second, limit, "###increasd");
    }
  }
}
