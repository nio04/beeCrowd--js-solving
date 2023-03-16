for (let i = 1; i <= 9; i += 2) {
  let j = 7;
  let limit = j - 2;

  for (j = j; j >= limit; j -= 1) {
    console.log(`I = ${i}, J = ${j}`);
  }
  if (j === limit) j += 2;
}
