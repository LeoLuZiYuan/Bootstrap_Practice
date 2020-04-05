// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
var numsquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easybtn = document.querySelector("#easyBtn");
// var hardbtn = document.querySelector("#hardBtn");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
             reset();
            //figure out how many square to show
            //pick new colors
            //pick a new pickedcolor
            //update page to  reflect change
        }) 
    }
}

function setupSquares(){
    for (let i = 0 ; i <  squares.length; i++) {
        squares[i].addEventListener("click", function(){
            //grab color of clicled square
            var clickedColor =  this.style.backgroundColor;
            console.log(clickedColor, pickedColor);
            //compare color a pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset() {
     //generate all new colors
     colors = generateRandomColors(numsquares);
     //pick a new randon color from array
     pickedColor = pickColor();
     //change colorDisplay
     colorDisplay.textContent = pickedColor;
     this.textContent = "NEW COLORS";

     messageDisplay.textContent = "";
     //change colors of square
     for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];        
        }else{
            squares[i].style.display = "none";    
        }
     }
     h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

// colorDisplay.textContent = pickedColor;



function changeColor(color){
    //loop through all squares
    for (let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;    
    }
}

function pickColor(){
    var random =  Math.floor(Math.random() * colors.length); 
    return colors[random];
}

function generateRandomColors(num){
    //make a array
    var arr = [];
    //repeat num times
    for (let i = 0; i < num; i++) {
        //get random color and push into arr   
        arr.push(randomColor());  
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick  a "red" form 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick  a "green" form 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick  a "blue" form 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g + ", "+ b + ")";
}
