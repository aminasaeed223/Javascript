const textbox = document.getElementById("textbox");
const tofrhn = document.getElementById("tofrhn");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");
let temp;

function convert() {
    if (tofrhn.checked) {
        temp = Number(textbox.value); // Corrected 'valule' to 'value'
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " °F"; // Added space before °F

    } else if (tocel.checked) {
        temp = Number(textbox.value); // Corrected 'valule' to 'value'
        temp = (temp - 32) * (5 / 9); // Corrected syntax for multiplication
        result.textContent = temp.toFixed(1) + " °C"; // Added space before °C

    } else {
        result.textContent = "Select a unit please";
    }
}
convert()