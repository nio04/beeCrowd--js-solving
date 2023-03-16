const first = 4.00;
const second = 4.50;
const third = 5.00;
const forth = 2.00;
const fifth = 1.50;

const issuePrice = (code, quantity) => {
  let price = 0;
  switch (code) {
    case 1:
      price += first * quantity;
      break;

    case 2:
      price += second * quantity;
      break;

    case 3:
      price += third * quantity;
      break;

    case 4:
      price += forth * quantity;
      break;

    case 5:
      price += fifth * quantity;
      break;
  }
  return parseFloat(price).toFixed(2);
};

console.log(`Total: R$ ${issuePrice(4,3)}`)
