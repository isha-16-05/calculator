const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      currentInput = '';
      display.textContent = '0';
    } else if (value === '=') {
      try {
        result = eval(currentInput);
        display.textContent = result;
        currentInput = result;
      } catch {
        display.textContent = 'Error';
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

