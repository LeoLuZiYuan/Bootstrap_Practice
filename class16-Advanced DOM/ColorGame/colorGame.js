var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (let i = 0 ; i <  squares.length; i++) {
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        //grab color of clicled square
        var clickedColor =  this.style.backgroundColor;
        //compare color a pickedColor
        if (clickedColor === pickedColor) {
            //alert("Correct!");
            messageDisplay.textContent = "Correct!!";
            changeColor(clickedColor);
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


