const hider = document.querySelector(".header__important-note");
const modal = document.querySelector(".modal");
const start = document.querySelector(".important__start");
const display = document.querySelector(".output__container-result");
const startAnimation = document.querySelector(".animation_title");
const left_first = document.querySelector(
  ".animation_container__left-side--items-1"
);
const left_second = document.querySelector(
  ".animation_container__left-side--items-2"
);
const right_first = document.querySelector(
  ".animation_container__right-side--items-1"
);

const right_second = document.querySelector(
  ".animation_container__right-side--items-2"
);

hider.addEventListener("click", function () {
  modal.classList.toggle("reveal");
});

modal.addEventListener("click", function () {
  modal.classList.toggle("reveal");
});

startAnimation.addEventListener("click", function () {
  if (startAnimation.textContent === "start animation")
    startAnimation.textContent = "stop animation";
  else startAnimation.textContent = "start Animation";
  left_first.classList.toggle("animForCircle");
  left_second.classList.toggle("bouncing");
  right_first.classList.toggle("weirdDirections");
  right_second.classList.toggle("spinning");
});

start.addEventListener("click", function () {
  const input = (input) => {
    const arr = input.split(" ").map((val) => {
      return Number(val);
    });

    return arr;
  };

  let userInput = input(prompt("enter [two] number for average test case: "));
  let first = 0;
  let second = 0;
  let average = 10;

  if (userInput[0] >= 0 && userInput[0] <= 10) {
    first = userInput[0];
  } else if (userInput[0] < 0 || userInput[0] > 10) {
    while (!first) {
      const input = prompt("first value is INVALID, Enter first value only: ");
      let num = Number(input[0]);
      first = num;
    }
  }
  if (userInput[1] >= 0 && userInput[1] <= 10) {
    second = userInput[1];
  } else if (userInput[1] < 0 || userInput[1] > 10) {
    while (!second) {
      const input = prompt(
        "second value is INVALID, Enter second value only: "
      );
      let num = Number(input[0]);
      second = num;
    }
  }

  const setAverage = (first, second) => {
    return (first + second) / 2;
  };
  setAverage(first, second);
  console.log(average);

  display.textContent = setAverage(first, second);
});
