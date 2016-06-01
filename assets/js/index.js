/**
 * Modified by sourcewang on 2016-04-23.
 */

var counter = 0;

setInterval(function(){
    counter += 1;

    $("#chuan-title").fadeOut(2000, function() {
        switch (counter % 3) {
            case 0:
                $("#chuan-title").html("Welcome here @_@~ 3");
                break;
            case 1:
                $("#chuan-title").html("Welcome here @_@~");
                break;
            case 2:
                $("#chuan-title").html("Welcome here @_@~ 2");
                break;
            default:
                $("#chuan-title").html("Welcome here @_@~");
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
