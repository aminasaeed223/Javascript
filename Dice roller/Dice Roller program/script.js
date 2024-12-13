function rollDice(){
    const numDice = document.getElementById("nofdice").value;
    const diceresult = document.getElementById("result");
    const diceimages = document.getElementById("images");
    const values = [];
    const images = [];
    for(let i = 0;i < numDice; i ++){
        const value = Math.floor(Math.random() *6 +1)
        values.push(value);
        images.push(`<img src = "Dice Roller program/images" /> ${value}.png `)
    }
    
diceresult.textContent = `dice: ${values.join(',')}`
diceimages.innerHTML = images.join("");
}