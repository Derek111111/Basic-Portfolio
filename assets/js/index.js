$(function(){

    console.log("loaded");

    $(".showAreaButton").on("click",function(){

        const clickedAreaName = $(this).data("area");
        const clickedArea= $("#" + clickedAreaName);

        $(".showArea").each(function(){

           if($(this).is(clickedArea)){
            $(this).css("display","block");
           }else{
            $(this).css("display","none");
           }

        });

    });

});