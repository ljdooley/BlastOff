let DiscNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//randomly shuffle the DiscNumbers array
for(let i = DiscNumbers.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = DiscNumbers[i];
    DiscNumbers[i] = DiscNumbers[j];
    DiscNumbers[j] = temp;
  }

/*create array of all Game Discs
let GameDiscs = document.getElementsByClassName("circle")
*/

function reveal(x){
    //reveal game discs number value
    console.log(DiscNumbers[x]); 
    //make revealed disc unclicable
    document.getElementById(x).removeAttribute("onclick"); 
}

console.log(DiscNumbers);