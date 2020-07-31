/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */

//= include ../lib/jquery-3.3.1.min.js

/**
 * CUSTOM SCRIPTS
 **/

$(document).ready(function () {
    /**
     * HEADER SCROLL
     */

    function onHeaderScrol() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 60) {
            jQuery(".header").addClass('header_active');
        } else {
            jQuery(".header").removeClass('header_active');
        }
    }

    /**
     * MOB MENU SCRIPT
     **/

    var nav = $('.main-nav');

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });


    // PARALAX
    $('.mouse-parallax').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.mouse-parallax__bg').css(
            'transform',
            'translate(-' + x * 35 + 'px, -' + y * 25 + 'px)'
        );
        $('.mouse-parallax__bg-2').css(
            'transform',
            'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'
        );
    });

    // Banner slider
    var bannerSlider;
    var instructionSlider;
    var headAcheTypesSlider;
    var preparationsSlider;

    function slidersInit() {
        if ($(window).width() <= 1080) {
            if (!bannerSlider) {
                bannerSlider = new Swiper('.banner-slider', {
                    pagination: {
                        el: '.banner-slider .swiper-pagination',
                        clickable: true,
                    }
                });
            }
            if (!instructionSlider) {
                instructionSlider = new Swiper('#instructionSlider', {
                    slidesPerView: 1,
                    breakpoints: {
                        767: {
                            slidesPerView: 2,
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#instructionSlider .swiper-button-next',
                        prevEl: '#instructionSlider .swiper-button-prev',
                    },
                });
            }
            if (!headAcheTypesSlider) {
                headAcheTypesSlider = new Swiper('#headAcheTypesSlider', {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    breakpoints: {
                        767: {
                            spaceBetween: 50,
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
            if (!preparationsSlider) {
                preparationsSlider = new Swiper('#preparationsSlider', {
                    slidesPerView: 'auto',
                    spaceBetween: 50,
                    loop: false,
                    breakpoints: {
                        320: {
                            spaceBetween: 30
                        }
                    },
                    pagination: {
                        el: '#preparationsSlider .swiper-pagination',
                        clickable: true,
                    },
                });
            }
        } else {
            if (bannerSlider) {
                bannerSlider.destroy(true, true);
                bannerSlider = null;
            }
            if (instructionSlider) {
                instructionSlider.destroy(true, true);
                instructionSlider = null;
            }
            if (headAcheTypesSlider) {
                headAcheTypesSlider.destroy(true, true);
                headAcheTypesSlider = null;
            }
            if (preparationsSlider) {
                preparationsSlider.destroy(true, true);
                preparationsSlider = null;
            }
        }
    }

    slidersInit();

    $('.slider-additional-btns .slider-pagination__item').click(function (e) {
        e.preventDefault();
        var slideNumber = $(this).data('slide') || 0;
        preparationsSlider.slideTo(Number(slideNumber));
        //scroll to element
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#preparationsSlider").offset().top - 200
        }, 300);
    });

    // PAIN SYMPTOMS Hover block

    var $imagesList = $('#pain-syndrom-imgs .link-syndrom');
    var $syndromsItems = $('.pain-syndrome-list__item');

    $imagesList.hover(function () {
        $syndromsItems.removeClass('active-syndrom');
        $imagesList.removeClass('active');
        $(this).addClass('active');
        $('[data-id=' + $(this).data('for') + ']').addClass('active-syndrom');
    });

    $(window).on('resize', function () {
        slidersInit();
    });

    //TOGGLE CONTACT INFO

    $('.contact__toggle').click(function (e) {
        $('.footer .bottom-row').toggle()
    });


    //POPUP
    var $contentBlock = $('#popup .popup-content');


    $(".popup-trigger").click(function (e) {
        e.preventDefault();
        console.log(12343)
        var theme = $(this).data('theme');
        var contentId = $(this).data('content-id');
        var content = $('#' + contentId).html();

        $contentBlock.html(content);

        $("#popup").addClass(theme).addClass("active");
        $("#overlay").fadeIn();
    });

    $("#popup-close, #overlay").click(function (e) {
        e.preventDefault();
        $("#popup").removeClass("active");
        $("#overlay").fadeOut();
        $contentBlock.html();
    })

});


