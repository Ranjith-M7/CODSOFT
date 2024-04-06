const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const specialCharacter = ["+", "-", "*", "/", "%"];

let output = "";

// function to display the evaluvated value
function calculate(btnValue) {
   if (btnValue === "=" && specialCharacter.includes(output.slice(-1))) {
    return;
  } else if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (btnValue === "=" && output === "") {
      return;
    }
    output += btnValue;
  }

  display.value = output;
}

// add event listeners to all the buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calculate(e.target.dataset.value);
  });
});
