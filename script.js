jQuery(document).ready(function($) {
    "use strict";
    //Creates variables menu and menulink
    var $menu = $('.navli'),
    $menulink = $('#menubtn');

    //Adds .parent to any anchor with an UL after it
    $(".navli li a").each(function () {
        if ($(this).next().length > 0) {
            $(this).addClass('parent');
        }
    });

    //Adds .dropdn to any li with an UL after it
    $(".navli li").each(function () {
        if ($(this).children('ul').length > 0) {
            $(this).addClass('dropdn');
        }
    });

    //Makes #menubtn clickable
    $menulink.click(function (e) {
        $menulink.toggleClass('activ');
        $menu.toggleClass('activ');
        e.preventDefault();
    });

    //Creates clickable .nav-more div
    $(function () {
        $('<div class="nav-more">&nbsp;</div>').insertAfter('a.parent');
    });

    //Makes ul after an li clickable
    $(function () {
        $('.nav-more').click(function (e) {
            e.preventDefault();
            $(this).toggleClass('activ');
            $(this).next("ul").toggleClass('activ');
            $(".navli li a").unbind('mouseenter mouseleave');
            $(".navli li ul li").unbind('mouseenter mouseleave');
        });
    });
});
