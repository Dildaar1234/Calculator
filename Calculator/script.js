const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
  liveResult();
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Live Result Preview
function liveResult() {
  try {
    if (display.value !== "") {
      let result = eval(display.value);
      if (!isNaN(result)) {
        display.setAttribute("placeholder", "= " + result);
      }
    } else {
      display.setAttribute("placeholder", "");
    }
  } catch {
    display.setAttribute("placeholder", "");
  }
}

// Keyboard Support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
    liveResult();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
