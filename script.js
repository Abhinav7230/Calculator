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


// Select the "Mode" button
const modeToggleButton = document.getElementById('modeToggle');
const svgElement = document.getElementById('dark-mode');

// Add a click event listener
modeToggleButton.addEventListener('click', () => {
    // Check if the body already has the 'bright-mode' class
    if (document.body.classList.contains('bright-mode')) {
        // If it does, remove the 'bright-mode' class (switch to dark mode)
        document.body.classList.remove('bright-mode');
    } else {
        // If it doesn't, add the 'bright-mode' class (switch to bright mode)
        document.body.classList.add('bright-mode');
    }
});


// Toggle the appearance of the SVG when the button is clicked
modeToggleButton.addEventListener('click', () => {
  // Check the current mode by the `fill` attribute of the SVG
  const isLightMode = svgElement.getAttribute('fill') === 'white';

  if (isLightMode) {
    svgElement.setAttribute('fill', 'black'); // Change to black for light mode
  } else {
    svgElement.setAttribute('fill', 'white'); // Change to white for dark mode
  }
});
