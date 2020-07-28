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
   //  $('.mouse-parallax').on('mousemove', (e)=>{
   //      const x = e.pageX / $(window).width();
   //      const y = e.pageY / $(window).height();
   //
   //      $('.mouse-parallax__bg').css(
   //          'transform',
   //          'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)'
   //      );
   //      $('.mouse-parallax__bg-2').css(
   //          'transform',
   //          'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
   //      );
   //        });
});