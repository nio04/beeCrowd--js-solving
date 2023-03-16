document.querySelector(".button").addEventListener("click", function () {
  const testCase = prompt("enter a number for testCase");

  for (let i = 1; i <= testCase; i += 1) {
    const getNumbers = prompt("enter number like this format: <num1> <num2>");
    const split = getNumbers.split(" ");

    if (Number(split[0]) > Number(split[1])) {
      let store = [];
      let first = Number(split[0]);
      let second = Number(split[1]);

      for (let i = first - 1; i > second; i -= 1) {
        if (i % 2 !== 0) {
          store.push(i);
        }
      }
      console.log(store.reduce((acc, curr) => acc + curr));
    }
    if (Number(split[0]) < Number(split[1])) {
      let test = [];
      let first = Number(split[0]);
      let second = Number(split[1]);

      for (let i = first + 1; i < second; i += 1) {
        if (i % 2 !== 0) {
          test.push(i);
        }
      }
      console.log(test.reduce((acc, curr) => acc + curr));
    }
  }
});

