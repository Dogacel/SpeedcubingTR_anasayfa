jQuery(
    function($){
    $(".tap").children("li").children("a").click(function(){
        $(".tap").children(".active").removeClass("active");
        $(this).parent().addClass("active");
        if($(this).hasClass("clc"))
        {
            $(".cozumler").slideDown("slow");
        }else{
            $(".cozumler").slideUp("slow");
        }
    });
});


