let DiscNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let CorrectAnswers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let DiscFlip = 0; //number of correct flips this round

//Creates an HTMLCollection of buttons w/Class name discs
let GameDiscs = document.getElementsByClassName("discs")

//randomly shuffle the DiscNumbers array
for(let i = DiscNumbers.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = DiscNumbers[i];
    DiscNumbers[i] = DiscNumbers[j];
    DiscNumbers[j] = temp;
  }

function reveal(x){
    //reveal game discs number value
    GameDiscs[x].innerHTML = DiscNumbers[x];
    
    //make revealed disc disabled
    GameDiscs[x].disabled = true;  
    
    CheckAnswer(x);
}

function CheckAnswer(x) {
    if (DiscNumbers[x] == CorrectAnswers[DiscFlip]) {
        DiscFlip++;
        console.log("correct");
        //Check if correct answer resulted in winning game. 
        if (DiscFlip == 10) {
            console.log("You won!")
        }
    } else {
        //display reset button
        document.getElementById('again').style.display = "block";
        
        //set all game disc buttons to disabled
        for (i = 0; i < GameDiscs.length; i++){
            GameDiscs[i].disabled = true;
        }
    }
    //return
}

function ResetRound(){
    //make all game disc buttons enabled & stop displaying values
    for (i = 0; i < GameDiscs.length; i++){
        GameDiscs[i].disabled = false;
        GameDiscs[i].innerHTML = "";
    }
    DiscFlip = 0;
    //hide the reset/try again button
    document.getElementById('again').style.display = "none";
    console.log("reset")
}

console.log(DiscNumbers);