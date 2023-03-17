const start = document.querySelector(".start_program");
const result = document.querySelector(".result");

start.addEventListener("click", function () {
  result.textContent = "";
  let store = "";
  const iteration = prompt("enter how many times divition you want: ");
  let i = 1;

  while (i <= Number(iteration)) {
    const input = prompt("enter numbers ... Format: <num1> <num2>");
    const arr = input.split(" ");
    const first = Number(arr[0]);
    const second = Number(arr[1]);
    const div = first / second;
    console.log(div);
    if (second === 0) store += "Null, ";
    else store += div + ",";

    i += 1;
  }
  result.textContent = store;
});
