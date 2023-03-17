const start = document.querySelector(".start");
const display = document.querySelector(".stastics_output");

start.addEventListener("click", function () {
  let alcohol = 0;
  let gasoline = 0;
  let diseal = 0;

  const userInputFunc = (input) => {
    return Number(input);
  };
  const printDetal = () => {
    return `Alcohol: ${alcohol} || Gasoline: ${gasoline} || Diseal: ${diseal}`
  }

  let userInput = userInputFunc(
    prompt("enter numbers according to your usage")
  );
  while (userInput !== 4) {
    if (userInput === 1) alcohol += 1;
    else if (userInput === 2) gasoline += 1;
    else diseal += 1;
    userInput = userInputFunc(prompt("enter numbers according to your usage"));
  }

  display.textContent = printDetal();
});
