//checkout  Off specific Todos By clicking
$("ul").on("click", "li", function(){
    //if li is gray
    // console.log($(this).css("color"))
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     //turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // else{
    //       //turn it gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }

    //using css
    $(this).toggleClass("completed");  
})

$("ul").on("click", "span", function (e) { 
    $(this).parent().fadeOut(500,function(){
        $(this).remove();   
    });
    //stop boble event
    e.stopPropagation();
});


$("input[type='text']").keypress(function (e) { 
    if (e.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
    }
});

$(".fa-plus").click(function (e) { 
    $("input[type='text']").fadeToggle();
});