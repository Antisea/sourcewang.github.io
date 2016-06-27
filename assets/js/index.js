/**
 * Modified by sourcewang on 2016-04-23.
 */

var counter = 0;

setInterval(function(){
    counter += 1;

    $("#chuan-title").fadeOut(2000, function() {
        switch (counter % 3) {
            case 0:
                $("#chuan-title").html("To Be A Full Stack Engineer");
                break;
            case 1:
                $("#chuan-title").html("Find Bugs And Resolve Them");
                break;
            case 2:
                $("#chuan-title").html("Feel At Home Please");
                break;
            default:
                $("#chuan-title").html("Thank Your For Your Visit");
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
