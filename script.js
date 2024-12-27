const displayInput = document.querySelector('.display-input');
const expressionDisplay = document.querySelector('.expression-display');

function appendChar(char) {
    if (expressionDisplay.value === '0' && char !== '.') {
        expressionDisplay.value = char;
    } else {
        expressionDisplay.value += char;
    }
}    

function clearDisplay() {
    displayInput.value = '';
    expressionDisplay.value = '0';
}


function toggleSign() {
    try {
        let currentValue = eval(expressionDisplay.value);
        currentValue *= -1;
        expressionDisplay.value = currentValue.toString();
    } catch (error) {
        displayInput.value = 'Error';
    }
}

function handlePercentage() {
    try {
        let currentValue = eval(expressionDisplay.value);
        currentValue /= 100;
        expressionDisplay.value = currentValue.toString();
    } catch (error) {
        displayInput.value = 'Error';
    }
}

function calculate() {
    try {
        const result = eval(expressionDisplay.value);
        displayInput.value = isFinite(result) ? result : 'Error';
    } catch (error) {
        displayInput.value = 'Error';
    }
}


const modeToggleButton = document.getElementById('modeToggle');
const svgElement = document.getElementById('dark-mode');

modeToggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('bright-mode')) {
        document.body.classList.remove('bright-mode');
    } else {
        document.body.classList.add('bright-mode');
    }
});


modeToggleButton.addEventListener('click', () => {
  const isLightMode = svgElement.getAttribute('fill') === 'white';

  if (isLightMode) {
    svgElement.setAttribute('fill', 'black');
  } else {
    svgElement.setAttribute('fill', 'white');
  }
});
