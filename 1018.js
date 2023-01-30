let input = 11257;

let note_100 = 0;
let note_100_rem = 0;
let note_50 = 0;
let note_50_rem = 0;
let note_20 = 0;
let note_20_rem = 0;
let note_10 = 0;
let note_10_rem = 0;
let note_5 = 0;
let note_5_rem = 0;
let note_2 = 0;
let note_2_rem = 0;
let note_1 = 0;

console.log(
  `${Math.trunc(input / 100)} notes of 100, consumed = ${Math.trunc(
    input / 100
  )} x 100 = ${Math.trunc(input / 100) * 100}, remain = ${input % 100}`
);
note_100_rem += (input % 100);

console.log(
  `${Math.trunc(
    Number(note_100_rem) / 50
  )} notes of 50, consumed = ${Math.trunc(
    Number(note_100_rem) / 50
  )} x 50 = ${Math.trunc(Number(note_100_rem) / 50) * 50}, remain = ${
    note_100_rem % 50
  }`
);
note_50_rem += note_100_rem % 50;

console.log(
  `${Math.trunc(note_50_rem / 20)} notes of 20, consumed = ${Math.trunc(
    note_50_rem / 20
  )} * 20 = ${Math.trunc(note_50_rem / 20) * 20}, remain = ${note_50_rem % 20}`
);
note_20_rem += note_50_rem % 20;

console.log(
  `${Math.trunc(note_20_rem / 10)} notes of 10, consumed = ${Math.trunc(
    note_20_rem / 10
  )} x 10 = ${Math.trunc(note_20_rem / 10) * 10}, remain = ${note_20_rem % 10}`
);
note_10_rem += note_20_rem % 10;

console.log(
  `${Math.trunc(note_10_rem / 5)} notes of 5, consumed = ${Math.trunc(
    note_10_rem / 5
  )} * 5 = ${Math.trunc(note_10_rem / 5) * 5}, remain = ${note_10_rem % 5}`
);
note_5_rem += note_10_rem % 5;

console.log(
  `${Math.trunc(note_5_rem / 2)} notes of 2, consumed = ${Math.trunc(
    note_5_rem / 2
  )} * 2 = ${Math.trunc(note_5_rem / 2) * 2}, remain = ${note_5_rem % 2}`
);
note_2_rem += note_5_rem % 2;

console.log(
  `${Math.trunc(note_2_rem / 1)}, consumed = ${Math.trunc(
    note_2_rem / 1
  )} * 1 = ${Math.trunc(note_2_rem / 1) * 1}, notes of 1, remain = ${note_2_rem % 1}`
);
