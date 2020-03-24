// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new randon color from array
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];    
    }
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for (let i = 0 ; i <  squares.length; i++) {
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        //grab color of clicled square
        var clickedColor =  this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        //compare color a pickedColor
        if (clickedColor === pickedColor) {
            //alert("Correct!");
            messageDisplay.textContent = "Correct!!";
            resetButton.textContent = "Play Again?"
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            //alert("Wrong!!")
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

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
