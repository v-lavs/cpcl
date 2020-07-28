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

    function slidersInit () {
        if ($(window).width() <= 767) {
            if(!bannerSlider) {
                bannerSlider = new Swiper('.banner-slider');
            }
            if(!instructionSlider) {
                instructionSlider = new Swiper('#instructionSlider');
            }
            if(!headAcheTypesSlider) {
                headAcheTypesSlider = new Swiper('#headAcheTypesSlider');
            }
        } else {
            if(bannerSlider) {
                bannerSlider.destroy(true, true);
                bannerSlider = null;
            }
            if(instructionSlider) {
                instructionSlider.destroy(true, true);
                instructionSlider = null;
            }
            if(headAcheTypesSlider) {
                headAcheTypesSlider.destroy(true, true);
                headAcheTypesSlider = null;
            }
        }
    }

    slidersInit();

    // PAIN SYMPTOMS Hover block

    var $imagesList = $('#pain-syndrom-imgs .link-syndrom');
    var $syndromsItems = $('.pain-syndrome-list__item');

    $imagesList.hover(function () {
        $syndromsItems.removeClass('active-syndrom');
        $imagesList.removeClass('active');
        $(this).addClass('active');
        $('[data-id='+ $(this).data('for') +']').addClass('active-syndrom');
        console.log($(this).data('for'));
    });

    $(window).on('resize', function() {
        slidersInit();
    });

});


