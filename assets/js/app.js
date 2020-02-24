$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    
});
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        console.log("enter!");
        const todoText = $(this).val();
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+ todoText+"</li>");
        $(this).val("");
    }
});
$("h1 span").click(function(){
    $("input[type='text']").fadeToggle();
});
