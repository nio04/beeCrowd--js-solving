document.querySelector(".button").addEventListener("click", function () {
  const userInput = prompt("how many test case you want to enter?");
  let rabbit = 0;
  let rat = 0;
  let frog = 0;

  for (let i = 1; i <= Number(userInput); i += 1) {
    const animalInput = prompt(
      "enter animal expriments as [rabbit, rat, frog]... format -> 10 rabbit"
    );
    const split = animalInput.split(" ");
    if (split[1] === "rabbit") rabbit += Number(split[0]);
    else if (split[1] === "rat") rat += Number(split[0]);
    else if (split[1] === "frog") frog += Number(split[0]);
    else animalInput, "is incorrect";
  }
  const totalTest = rabbit + rat + frog;
  console.log("total test ", totalTest);
  console.log("total rabbit experiment ", rabbit);
  console.log("total rat experiment ", rat);
  console.log("total frog experiment ", frog);
  console.log("percentage of rabbit experiment ", totalTest / rabbit, "%");
  console.log("percentage of rat experiment ", totalTest / rat, "%");
  console.log("percentage of frog experiment ", totalTest / frog, "%");
});
