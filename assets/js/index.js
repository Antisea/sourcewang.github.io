/**
 * Modified by sourcewang on 2016-04-23.
 */

var counter = 0;

setInterval(function(){
    counter += 1;

    $("#huan-title").fadeOut(1600, function() {
        switch (counter % 3) {
            case 0:
                $("#huan-title").html("No Pains No Gains");
                break;
            case 1:
                $("#huan-title").html("Find Bugs And Resolve Them");
                break;
            case 2:
                $("#huan-title").html("More Skills More Efforts");
                break;
            default:
                $("#huan-title").html("Thanks For Your Visit");
                break;
        }
    });
    $("#huan-title").fadeIn(1000);

}, 1400);

// Window Scroll
var windowScroll = function () {
    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();

        if ($(window).scrollTop() > 90) {
            $('#site-header-id').addClass('site-header-nav-scrolled');
        } else {
            $('#site-header-id').removeClass('site-header-nav-scrolled');
        }
    });
};

$( document ).ready(function() {
    windowScroll();
});
