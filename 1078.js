const input = 140;

const multiplicationTable = input => {
  for (let i = 1; i <= 10; i += 1){
    console.log(`${i} * ${input} = ${input * i}`);
  }
}

multiplicationTable(input);
