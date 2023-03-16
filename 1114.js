const password = "2002";
const start = document.querySelector(".start_program");
const password_output = document.querySelector(".password_output_msg");

start.addEventListener("click", function () {
  let input = prompt("Enter The Password:");
  let i = 1;
  while (Number(input) !== Number(password)) {
    input = prompt("Enter The Password:");
    password_output.textContent = "`${Incorrect password}`";
    i += 1;
  }
  password_output.textContent = `Correct password , total attempt: ${i}`;
  console.log("test", i);
});
