let store = "";
let fixed = 1;
let counter = 1;

for (let i = 1; i < 8; i += 1) {
  for (let j = 1; j < 4; j += 1) {
    store += counter + " ";
    counter += 1;
    if (counter === fixed + 3) {
      store += "PUM ";
      counter += 1;
      fixed += 4;
    }
  }
}

console.log(store);
