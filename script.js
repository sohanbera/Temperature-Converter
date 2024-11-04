function convertTemp() {
    const tempInput = document.getElementById("tempInput").value;
    const tempType = document.getElementById("tempType").value;
    const resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(tempInput) || tempInput === "") {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    const temp = parseFloat(tempInput);
    let convertedTemp;

    switch (tempType) {
        case "Celsius":
            convertedTemp = `${(temp * 9/5 + 32).toFixed(2)} °F, ${(temp + 273.15).toFixed(2)} K`;
            break;
        case "Fahrenheit":
            convertedTemp = `${((temp - 32) * 5/9).toFixed(2)} °C, ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
            break;
        case "Kelvin":
            convertedTemp = `${(temp - 273.15).toFixed(2)} °C, ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            return;
    }

    resultDiv.innerHTML = `Converted Temperature: ${convertedTemp}`;
}
