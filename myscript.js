

 

document.addEventListener("DOMContentLoaded", function() {
    let hint = document.getElementById("hint");
    
});




//generate random num between 1 & 100
const randomNumber = Math.floor(Math.random()* 100)
console.log(`random = `, randomNumber);

//submitting user guess
function submitGuess(){
    let userGuess = document.getElementById("user-guess");
    let userGuessValue = Number(userGuess.value);
    console.log(`User Guess =`, userGuessValue);
    if (userGuessValue === randomNumber){
        youWin(); 
    } else if (userGuessValue < randomNumber){
        hint.innerHTML = "Try a higher number!";
    }else{
        hint.innerHTML = "Try a lower number!"
    }

}

function youWin(){
    let hiddenNumber = document.getElementById("random-number");
    let playAgainBtn = document.getElementById("playAgain");
    let submitBtn = document.getElementById("submit");
    console.log(hiddenNumber);
    hiddenNumber.innerHTML = `${randomNumber}`
    hint.innerHTML = "YOU WIN";
    submitBtn.style.display = "none";
    playAgainBtn.style.display = "block";

}

function playAgain(){
    window.location.reload()
}



