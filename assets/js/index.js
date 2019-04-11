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

    $("#resume-view").on("click",function(){

        var modal = $("#resumeModal");

        modal.css("display", "block");
        console.log("made it visible");

    });

    $("#closeResume").on("click",function(){

        var modal = $("#resumeModal");

        modal.css("display", "none");

    });

});