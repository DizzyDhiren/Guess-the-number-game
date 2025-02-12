const submitBtn = document.getElementById("submit");
const hint = document.getElementById("hint");





//generate random num between 1 & 100
const randomNumber = Math.floor(Math.random()* 100)
console.log(randomNumber);

//submitting user guess
function submitGuess(){
    let userGuess = document.getElementById("user-guess");
    let userGuessValue = Number(userGuess.value);
    console.log(userGuessValue);
    if (userGuessValue === randomNumber){
        console.log("you win");
    }

}



