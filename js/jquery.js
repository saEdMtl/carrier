$(document).ready(function () {

    $(".villa").on("click", function () {

        $(".villa").css({ "border-bottom": "4px solid #566246" });
        $(".plane").css({ "border-bottom": "0" });
        $(".train").css({ "border-bottom": "0" });
        $(".hotel").css({ "border-bottom": "0" });
        $(".bus").css({ "border-bottom": "0" });
        $(".tour").css({ "border-bottom": "0" });
        $(".picture").attr("src", "images/Artboard 5.png");
        $(".second-line-villa").css({ "display": "block" });
        $(".second-line-plane").css({ "display": "none" });
        $(".second-line-train").css({ "display": "none" });
        $(".second-line-hotel").css({ "display": "none" });
        $(".second-line-bus").css({ "display": "none" });
        $(".second-line-tour").css({ "display": "none" });

    });

    $(".hotel").on("click", function () {

        $(".villa").css({ "border-bottom": "0" });
        $(".plane").css({ "border-bottom": "0" });
        $(".train").css({ "border-bottom": "0" });
        $(".hotel").css({ "border-bottom": "4px solid #566246" });
        $(".bus").css({ "border-bottom": "0" });
        $(".tour").css({ "border-bottom": "0" });
        $(".picture").attr("src", "images/Artboard 4.png");
        $(".second-line-villa").css({ "display": "none" });
        $(".second-line-plane").css({ "display": "none" });
        $(".second-line-train").css({ "display": "none" });
        $(".second-line-hotel").css({ "display": "block" });
        $(".second-line-bus").css({ "display": "none" });
        $(".second-line-tour").css({ "display": "none" });

    });

    $(".tour").on("click", function () {

        $(".villa").css({ "border-bottom": "0" });
        $(".plane").css({ "border-bottom": "0" });
        $(".train").css({ "border-bottom": "0" });
        $(".hotel").css({ "border-bottom": "0" });
        $(".bus").css({ "border-bottom": "0" });
        $(".tour").css({ "border-bottom": "4px solid #566246" });
        $(".picture").attr("src", "images/Artboard 6.png");
        $(".second-line-villa").css({ "display": "none" });
        $(".second-line-plane").css({ "display": "none" });
        $(".second-line-train").css({ "display": "none" });
        $(".second-line-hotel").css({ "display": "none" });
        $(".second-line-bus").css({ "display": "none" });
        $(".second-line-tour").css({ "display": "block" });

    });

    $(".bus").on("click", function () {

        $(".villa").css({ "border-bottom": "0" });
        $(".plane").css({ "border-bottom": "0" });
        $(".train").css({ "border-bottom": "0" });
        $(".hotel").css({ "border-bottom": "0" });
        $(".bus").css({ "border-bottom": "4px solid #566246" });
        $(".tour").css({ "border-bottom": "0" });
        $(".picture").attr("src", "images/Artboard 1.png");
        $(".second-line-villa").css({ "display": "none" });
        $(".second-line-plane").css({ "display": "none" });
        $(".second-line-train").css({ "display": "none" });
        $(".second-line-hotel").css({ "display": "none" });
        $(".second-line-bus").css({ "display": "block" });
        $(".second-line-tour").css({ "display": "none" });

    });

    $(".train").on("click", function () {

        $(".villa").css({ "border-bottom": "0" });
        $(".plane").css({ "border-bottom": "0" });
        $(".train").css({ "border-bottom": "4px solid #566246" });
        $(".hotel").css({ "border-bottom": "0" });
        $(".bus").css({ "border-bottom": "0" });
        $(".tour").css({ "border-bottom": "0" });
        $(".picture").attr("src", "images/Artboard 3.png");
        $(".second-line-villa").css({ "display": "none" });
        $(".second-line-plane").css({ "display": "none" });
        $(".second-line-train").css({ "display": "block" });
        $(".second-line-hotel").css({ "display": "none" });
        $(".second-line-bus").css({ "display": "none" });
        $(".second-line-tour").css({ "display": "none" });

    });

    $(".plane").on("click", function () {

        $(".villa").css({ "border-bottom": "0" });
        $(".plane").css({ "border-bottom": "4px solid #566246" });
        $(".train").css({ "border-bottom": "0" });
        $(".hotel").css({ "border-bottom": "0" });
        $(".bus").css({ "border-bottom": "0" });
        $(".tour").css({ "border-bottom": "0" });
        $(".picture").attr("src", "images/Artboard 2.png");
        $(".second-line-villa").css({ "display": "none" });
        $(".second-line-plane").css({ "display": "block" });
        $(".second-line-train").css({ "display": "none" });
        $(".second-line-hotel").css({ "display": "none" });
        $(".second-line-bus").css({ "display": "none" });
        $(".second-line-tour").css({ "display": "none" });

    });


    $(".click").on("change", function () {
        $(".click").not(this).prop('checked', false);
    });


    $('#inside').click(function (e) {
        if (e.target.checked) {
            $(".destination").css({ "display": "flex" });
            $(".destination2").css({ "display": "none" });

        }
    });

    $('#outside').click(function (e) {
        if (e.target.checked) {
            $(".destination").css({ "display": "none" });
            $(".destination2").css({ "display": "flex" });

        }
    });


    $(".buttn1").on("click", function () {

        $(".collaps1").slideToggle();
        $(".span1").toggleClass("rotate");

    });

    $(".buttn2").on("click", function () {

        $(".collaps2").slideToggle();
        $(".span2").toggleClass("rotate");

    });

    $(".buttn3").on("click", function () {

        $(".collaps3").slideToggle();
        $(".span3").toggleClass("rotate");

    });

    $(".buttn4").on("click", function () {

        $(".collaps4").slideToggle();
        $(".span4").toggleClass("rotate");

    });

    $(".hamburger").on("click", function () {
        $(".rightt").toggleClass("go-right");
        $(".leftt").toggleClass("go-left");
    })

});

var menu = $('.web-menu-section');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && menu.hasClass('web-menu-section')) {
            menu.addClass('web-header-fixed');
        } else if ($(this).scrollTop() <= 0 && menu.hasClass('web-header-fixed')) {
            menu.removeClass('web-header-fixed');
        }
    });