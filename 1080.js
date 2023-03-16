const store = [];

// ! generate number
const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 300 + 1);
};

// ! get one random number
const getOneRandomNumber = Math.trunc(Math.random() * 100 + 1);

// ! push random number
for (let i = 1; i <= 100; i += 1) {
  store.push(generateRandomNumber());

  if (store.length >= 100) break;
}

// ! get the highest number
const copyOfMain = store.slice();
copyOfMain.sort((a, b) => b - a);

for (let i = 0; i < store.length; i += 1) {
  if (store[i] === store[getOneRandomNumber]) {
    console.log(`found a random number: ${store[i]}`);
    console.log(`its postion is: ${i + 1}`);
  }
  if (store[i] === copyOfMain[0]) {
    console.log("highest number is:", copyOfMain[0]);
    console.log("the highest number position:", i + 1);
  }
}
