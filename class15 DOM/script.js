var h1 = document.querySelector("h1");
h1.style.color = 'blue';

var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
    if (isBlue) {
        body.style.backgroundColor = "White";
    }
    else{
        body.style.backgroundColor = "#3499db";
    }
    isBlue = !isBlue;
}, 1000);