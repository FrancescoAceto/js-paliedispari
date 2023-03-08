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