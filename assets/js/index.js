/**
 * Modified by sourcewang on 2016-04-23.
 */

var counter = 0;

setInterval(function(){
    counter += 1;

    $("#chuan-title").fadeOut(1000, function() {
        switch (counter % 6) {
            case 0:
                $("#chuan-title").html("Linux Device Driver 3");
                break;
            case 1:
                $("#chuan-title").html("jQuery");
                break;
            case 2:
                $("#chuan-title").html("bootstrap");
                break;
            case 3:
                $("#chuan-title").html("Table tennis");
                break;
            case 4:
                $("#chuan-title").html("hybridity app");
                break;
            case 5:
                $("#chuan-title").html("LAMP");
                break;
            default:
                $("#chuan-title").html("IoT");
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
