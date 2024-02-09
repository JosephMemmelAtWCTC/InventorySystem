//The splitting up of this into multiple files is so that I can view things separately on one page instead of everything all on one. I want to set it up so that the JS here does nothing but put them together and they can be put together without needing the js if just moved to one file in the correct places

$(function(){
    // https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_ajax_load
    // $("#div1").replaceWith($('<div id="remove">').load("./components/MainFooter.html"));

    $.get("./components/MainFooter.html", function(data) {
        $("#div1").replaceWith(data);
    });
});
