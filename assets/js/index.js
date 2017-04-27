/**
 * Modified by sourcewang on 2017-04-27.
 */

var counter = 0;

setInterval(function(){
    counter += 1;

    $("#huan-title").fadeOut(1600, function() {
        switch (counter % 3) {
            case 2:
                $("#huan-title").html("世界上有两样东西让人无法自拔");
                break;
            case 1:
                $("#huan-title").html("一个是牙疼，另一个是爱上一个人");
                break;
            case 0:
                $("#huan-title").html("只有谎言才拼命鼓吹，唯恐别人不信");
                break;
            default:
                $("#huan-title").html("当你看到这句话就表明不知道什么地方出现了问题，囧");
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
