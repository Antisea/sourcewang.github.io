/**
 * Modified by sourcewang on 2016-04-23.
 */

var counter = 0;

setInterval(function(){
    counter += 1;

    $("#chuan-title").fadeOut(1000, function() {
        switch (counter % 6) {
            case 0:
                $("#chuan-title").html("aha, Source is so cool, right?");
                break;
            case 1:
                $("#chuan-title").html("Intrested in LDD and HTML.");
                break;
            case 2:
                $("#chuan-title").html("I'm going to be a Full Stack developer!!!");
                break;
            case 3:
                $("#chuan-title").html("Table tennis is my favorite.");
                break;
            case 4:
                $("#chuan-title").html("To be a CTO? Yeah!! It's one of my dreams.");
                break;
            case 5:
                $("#chuan-title").html("My dream will come true.");
                break;
            default:
                $("#chuan-title").html("世上无难事，只要肯放弃（毒鸡汤）");
                break;
        }
    });
    $("#chuan-title").fadeIn(1000);

}, 2000);

// Window Scroll
var windowScroll = function () {
    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();

        if ($(window).scrollTop() > 70) {
            $('#site-header-id').addClass('site-header-nav-scrolled');
        } else {
            $('#site-header-id').removeClass('site-header-nav-scrolled');
        }
    });
};

$( document ).ready(function() {
    windowScroll();
});
