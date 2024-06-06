
let randomNumber = Math.floor(Math.random() * 20) + 1;
let guessInput = document.getElementById('guess-input');
let guessButton = document.getElementById('guess-button');
let message = document.getElementById('message');
let resetButton = document.getElementById('reset-button');

console.log(randomNumber)

guessButton.addEventListener('click', () => {
    const userGuess = guessInput.value;
    // Handeliing the valid input  
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        message.innerText = 'Please enter a number between 1 and 20.';
        message.style.color = 'red';

    }
    //Handeling the winning condation
     else if (userGuess === randomNumber) {
        displayGuess(guess);
       message.innerText = 'Congratulations! You guessed the number.';
       message.style.color = 'green';
       message.style.color = 'green';
        console.log('hello madarchod')
       
    }

   //handeling the condation when the value is less than entered value

     else if (userGuess < randomNumber) {
        message.innerText = 'Too low! Try again.';
        message.style.color = 'blue';
    }

     //Handeling the conadtion when the value is grater than entered value

     else if (userGuess > randomNumber) {
        message.innerText = 'Too high! Try again.';
        message.style.color = 'blue';
    }
});

resetButton.addEventListener('click', () => {
   
    guessInput.value = '';
    message.tinnerText = '';
   
});

