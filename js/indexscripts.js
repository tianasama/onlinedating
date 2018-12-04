

/*LANDING PAGE FADES*/
$("#landingtitle").addClass("load");

$("button").click(function(){
        $("body").fadeOut("6000", function(){
        window.location = "site.html";
        });
});
