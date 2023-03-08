let PalindromoInputEL = document.getElementById("PalindromoInput");
let PalindromoButtonEL = document.getElementById("PalindromoButton");
let PalindromoOutputEL = document.getElementById("PalindromoOutput");

PalindromoButtonEL.addEventListener("click", function () {
    
     isPalindrome(PalindromoInputEL.value);

});


function isPalindrome(UserInput) {
        
    let isPalindrome = true;

    let start = 0;
    let end = UserInput.length - 1;

    let contatore = 0;


    while (isPalindrome && contatore < UserInput.length) {
        
       
        if (UserInput[start] == UserInput[end]) {
            
            console.log(UserInput[start], UserInput[end]);

        } else {
            console.log(UserInput[start], UserInput[end])
            isPalindrome = false;
        }

        start++;
        end--;

        contatore++;

        console.log(isPalindrome);
    };

    if (isPalindrome) {
        console.log("palindroma");
        PalindromoOutputEL.innerText = "Palindroma";
        return true;
    } else {
        console.log("non palindroma");
        PalindromoOutputEL.innerText = "Non Palindroma";
        return false;
    }
};

// Fine Palindromi

//Inizio Pari e Dispari
let UserNumberEL = document.getElementById("UserNumber");
let UserButtonPariEL = document.getElementById("UserButtonPari");
let UserButtonDispariEL = document.getElementById("UserButtonDispari");
let GameOutputEL = document.getElementById("GameOutput");

let contatore = 0

while (contatore < 5) {
    GameOutputEL.innerText = RandomNumberBetween(1,5);
}



function RandomNumberBetween(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

    return random;
}
