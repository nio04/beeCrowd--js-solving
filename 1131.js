const start = document.querySelector(".start");

start.addEventListener("click", function () {
  let banWinScore = 0;
  let IndWinScore = 0;
  let drawCount = 0;
  let matchCounts = 0;

  // ! Function Defining START here
  
  const scoreInput = (input) => {
    let test = input;
    let split = test.split(" ");
    return split;
  };

  const winChecker = (input) => {
    if (Number(input[0]) === Number(input[1])) drawCount += 1;
    else if (Number(input[0]) > Number(input[1])) banWinScore += 1;
    else if (Number(input[1]) > Number(input[0])) IndWinScore += 1;
    matchCounts += 1;
  };

  const mainVictory = (ban, ind) => {
    if (ban > ind) return "Bangladesh Won The Game! ";
    else if (ind > ban) return "India Won The Game";
    else return "NoBody Won The Game";
  };

  // ! function defining ENDS here

  let getScoreInput = scoreInput(prompt("Enter Score <Bangladesh> <India>"));

  winChecker(getScoreInput);

  let isFinished = prompt("1: [MATCH FINISHED] || 2: [MATCH NOT-FINISHED]");

  while (Number(isFinished) === 2) {
    getScoreInput = scoreInput(prompt("Enter Score <Bangladesh> <India>"));
    winChecker(getScoreInput);

    isFinished = prompt("1: [GAME FINISHED] || 2: [GAME NOT-FINISHED]");
  }

  const display = document.querySelector(".result");

  display.textContent = `
Match Counts: ${matchCounts} //
Bangladesh Wins: ${banWinScore} //
India Wins: ${IndWinScore} //
Draw Counts: ${drawCount} //
Main Winner: ${mainVictory(banWinScore, IndWinScore)}
`;
});
