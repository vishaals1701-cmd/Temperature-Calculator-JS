const userInput = document.getElementById("userInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const resultDisplay = document.getElementById("resultDisplay");
let temperature;

function toConvert(){

    if(toFahrenheit.checked){
        // resultDisplay.textContent = "To fahrenheit is clicked";
        temperature =  Number(userInput.value);
        temperature = temperature * 9/5 + 32;
        resultDisplay.textContent = `Fahrenheit: ${temperature.toFixed(1)} °F`;
    }
    else if(toCelsius.checked){
        // resultDisplay.textContent = "To celsius is clicked"; 
        temperature = Number(userInput.value);
        temperature = (temperature - 32) * 5/9;
        resultDisplay.textContent = `Celsius: ${temperature.toFixed(1)} °C`
    }
    else{
        resultDisplay.textContent = "No options are selected";
    }

}