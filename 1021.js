let notes = 91.01;
let coins = String(notes);
coins = coins.split(".");
coins.length > 1 ? (coins = Number(coins[1])) : (coins = null);


// ! for notes
const notes_100 = (num) => {
  notes = Math.trunc(notes % 100);
  return Math.trunc(num / 100);
};

const notes_50 = (num) => {
  notes = Math.trunc(notes % 50);
  return Math.trunc(num / 50);
};

const notes_20 = (num) => {
  notes = Math.trunc(notes % 20);
  return Math.trunc(num / 20);
};
const notes_10 = (num) => {
  notes = Math.trunc(notes % 10);
  return Math.trunc(num / 10);
};

const notes_5 = (num) => {
  notes = Math.trunc(notes % 5);
  return Math.trunc(num / 5);
};

const notes_2 = (num) => {
  notes = Math.trunc(notes % 2);
  return Math.trunc(num / 2);
};

// ! for coins
const coins_1 = (coin) => {
  if (coins - 1 < 0) return 0;
  coins %= Math.trunc(1);
  return Math.trunc(coin / 1);
}
const coins_50 = (coin) => {
  if (coins - 50 < 0) return 0;
  coins = Math.trunc(coins % 50);
  return Math.trunc(coin / 50);
};

const coins_25 = (coin) => {
  if (coins - 25 < 0) return 0;
  coins = Math.trunc(coins % 25);
  return Math.trunc(coin - 25);
};

const coins_10 = (coin) => {
  if (coins - 10 < 0) return 0;
  coins = Math.trunc(coins % 10);
  return Math.trunc(coin / 10);
};
const coins_05 = (coin) => {
  if (coins - 05 < 0) return 0;
  coins %= Math.trunc(10);
  return Math.trunc(coin / 05);
}

const coins_01 = (coin) => {
  if (coins - 01 < 0) return 0;
  coins %= Math.trunc(01);
  return Math.trunc(coin / 01);
}

console.log(` Money Given: ${notes}
NOTAS:
${notes_100(notes)} nota(s) de R$ 100.00
${notes_50(notes)} nota(s) de R$ 50.00
${notes_20(notes)} nota(s) de R$ 20.00
${notes_10(notes)} nota(s) de R$ 10.00
${notes_5(notes)} nota(s) de R$ 5.00
${notes_2(notes)} nota(s) de R$ 2.00
MOEDAS:
${coins_1(coins)} moeda(s) de R$ 1.00
${coins_50(coins)} moeda(s) de R$ 0.50
${coins_25(coins)} moeda(s) de R$ 0.25
${coins_10(coins)} moeda(s) de R$ 0.10
${coins_05(coins)} moeda(s) de R$ 0.05
${coins_01(coins)} moeda(s) de R$ 0.01`);
