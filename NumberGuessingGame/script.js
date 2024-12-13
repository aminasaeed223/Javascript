// Number guess
const minum = 50;
const maxnum = 250;
const answer = Math.floor(Math.random() * (maxnum - minum + 1)) + minum;
let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = prompt(`Enter a number between ${minum} and ${maxnum}`);
    guess = Number(guess);
    
    if (isNaN(guess)) {
        window.alert('Please enter a valid number');
    } else if (guess < minum || guess > maxnum) {
        window.alert('Please enter a number within the range');
    } else {
        attempts++;
        if (guess < answer) {
            window.alert('Too Low');
        } else if (guess > answer) {
            window.alert('Too High');
        } else {
            window.alert('Correct!! You got it.');
            running = false;
        }
    }
}
