/*
to get second: just modulas the input;
to get minute: first, divide the user input and modulas the answer
to get hour: divide the user input and divide it again then Math.Trunc() it
*/

const N = 556;
const firstStep = Math.trunc(input / 60);

const setSecond = (input) => {
  return Math.trunc(input % 60);
}

const setMinute = (input) => {
  return Math.trunc(firstStep % 60);
}

const setHour = (input) => {
  return Math.trunc(firstStep / 60);
}

console.log(`${setHour(N)}:${setMinute(N)}:${setSecond(N)}`);
