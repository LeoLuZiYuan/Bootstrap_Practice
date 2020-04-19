$("button").on("click",function(){
    //消失
    // $('div').fadeOut(1000,function(){
    //     //在DOM中隱藏顯示
    //     //timer執行完後才執行funcioin
    //     console.log("fade Completed!");
        
    //     //在DOM中正式刪除
    //     //$(this).remove();
    // });

    //浮現與消失
    //$("div").fadeToggle(500);

    //從隱藏狀態向下滑動顯現
    //$("div").slideDown();
    //顯示狀態向上滑動消失
    //$("div").slideUp();
    //向下滑動顯現/向上滑動消失
    $("div").slideToggle();
})
