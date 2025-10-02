function calculate(operation) {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultElement = document.getElementById('result');

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.textContent = "Error: Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    
    // Display result, rounding to 4 decimal places if it's a float
    resultElement.textContent = `Result: ${+result.toFixed(4)}`;
}

function clearResult() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = 'Result:';
}
