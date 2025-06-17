// script.js

let displayValue = '';      // stores current input/expression

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculateResult() {
  try {
    // prevent division by zero
    if (displayValue.includes('/0')) {
      throw new Error("Division by zero");
    }
    // evaluate expression safely—ensure only valid chars
    const sanitized = displayValue.match(/^[0-9+\-*/.]+$/) ? displayValue : '';
    const result = sanitized ? eval(sanitized) : '';
    displayValue = result !== undefined ? result.toString() : '';
  } catch (e) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
