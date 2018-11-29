

/*LANDING PAGE FADES*/
$("#landingtitle").addClass("load");

$("button").click(function(){
        $("body").fadeOut("6000", function(){
        window.location = "site.html";
        });
});


/*MAIN SITE PAGE FADES*/
$("#titlepage").addClass("load");
