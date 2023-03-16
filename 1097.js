let second = 7;
let limit = second - 2; //3

for (let i = 1; i <= 9; i += 2) {
  for (let j = second; j >= limit; j -= 1) {
    console.log(`I = ${i}, J = ${j}`);
    if (j === limit) {
      temp = second;
      second += 2;
      limit = temp;
    }
  }
}
