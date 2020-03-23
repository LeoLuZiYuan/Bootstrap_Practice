var p1Button= document.querySelector("#p1");
var p2Button= document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display =document.querySelector("#p1Display");
var p2Display =document.querySelector("#p2Display");
var numinput = document.querySelector("input");
var p = document.querySelector("p");
var winnerScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Socre = 0;
var gameOver= false;
var winningScore = 5;

console.log(p1Display);
console.log(p2Display);
console.log(resetButton);
console.log(numinput);

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        //console.log(p1Score, winningScore);
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver=true;
        } 
        p1Display.textContent = p1Score;    
    }
})

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Socre++;
        if (p2Socre === winningScore) {
            p2Display.classList.add("winner");
            gameOver=true;
        }
        p2Display.textContent = p2Socre;    
    }
})

resetButton.addEventListener("click",function(){
    reset();
})

function reset(){
    p1Score = 0;
    p2Socre = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numinput.addEventListener("change", function(){
    winnerScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
    //alert("change the input!!");
})