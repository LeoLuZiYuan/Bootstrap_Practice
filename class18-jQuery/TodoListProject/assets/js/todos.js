//checkout  Off specific Todos By clicking
$("li").click(function(){
    //$(this).css("color","gray");
    //$(this).css("text-decoration","line-through");
    //if li is gray
    console.log($(this).css("color"))
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        //turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else{
          //turn it gray
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
      
})
