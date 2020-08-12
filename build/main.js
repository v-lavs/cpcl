/**
 *To include js file from libraries write: `//= include ./path-to-file`
 * */



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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKlRvIGluY2x1ZGUganMgZmlsZSBmcm9tIGxpYnJhcmllcyB3cml0ZTogYC8vPSBpbmNsdWRlIC4vcGF0aC10by1maWxlYFxyXG4gKiAqL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ1VTVE9NIFNDUklQVFNcclxuICoqL1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIRUFERVIgU0NST0xMXHJcbiAgICAgKi9cclxuXHJcbiAgICBmdW5jdGlvbiBvbkhlYWRlclNjcm9sKCkge1xyXG4gICAgICAgIHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkID4gNjApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmhlYWRlclwiKS5hZGRDbGFzcygnaGVhZGVyX2FjdGl2ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5oZWFkZXJcIikucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNT0IgTUVOVSBTQ1JJUFRcclxuICAgICAqKi9cclxuXHJcbiAgICB2YXIgbmF2ID0gJCgnLm1haW4tbmF2Jyk7XHJcblxyXG4gICAgJCgnLmJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGpRdWVyeSgnLmJhY2tkcm9wJykuZmFkZUluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYnRuLWNsb3NlLCAuYmFja2Ryb3AnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBqUXVlcnkoJy5iYWNrZHJvcCcpLmZhZGVPdXQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBQQVJBTEFYXHJcbiAgICAkKCcubW91c2UtcGFyYWxsYXgnKS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB4ID0gZS5wYWdlWCAvICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBlLnBhZ2VZIC8gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAkKCcubW91c2UtcGFyYWxsYXhfX2JnJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiAzNSArICdweCwgLScgKyB5ICogMjUgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCgnLm1vdXNlLXBhcmFsbGF4X19iZy0yJykuY3NzKFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ3RyYW5zbGF0ZSgtJyArIHggKiA1MCArICdweCwgLScgKyB5ICogNTAgKyAncHgpJ1xyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCYW5uZXIgc2xpZGVyXHJcbiAgICB2YXIgYmFubmVyU2xpZGVyO1xyXG4gICAgdmFyIGluc3RydWN0aW9uU2xpZGVyO1xyXG4gICAgdmFyIGhlYWRBY2hlVHlwZXNTbGlkZXI7XHJcbiAgICB2YXIgcHJlcGFyYXRpb25zU2xpZGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNsaWRlcnNJbml0KCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDgwKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFubmVyU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBiYW5uZXJTbGlkZXIgPSBuZXcgU3dpcGVyKCcuYmFubmVyLXNsaWRlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAnLmJhbm5lci1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaW5zdHJ1Y3Rpb25TbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uU2xpZGVyID0gbmV3IFN3aXBlcignI2luc3RydWN0aW9uU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNzY3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnI2luc3RydWN0aW9uU2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2RWw6ICcjaW5zdHJ1Y3Rpb25TbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGVhZEFjaGVUeXBlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgaGVhZEFjaGVUeXBlc1NsaWRlciA9IG5ldyBTd2lwZXIoJyNoZWFkQWNoZVR5cGVzU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcHJlcGFyYXRpb25zU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVwYXJhdGlvbnNTbGlkZXIgPSBuZXcgU3dpcGVyKCcjcHJlcGFyYXRpb25zU2xpZGVyJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAnI3ByZXBhcmF0aW9uc1NsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGJhbm5lclNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYmFubmVyU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBiYW5uZXJTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnN0cnVjdGlvblNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25TbGlkZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uU2xpZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGVhZEFjaGVUeXBlc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgaGVhZEFjaGVUeXBlc1NsaWRlci5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaGVhZEFjaGVUeXBlc1NsaWRlciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByZXBhcmF0aW9uc1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgcHJlcGFyYXRpb25zU2xpZGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBwcmVwYXJhdGlvbnNTbGlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlcnNJbml0KCk7XHJcblxyXG4gICAgJCgnLnNsaWRlci1hZGRpdGlvbmFsLWJ0bnMgLnNsaWRlci1wYWdpbmF0aW9uX19pdGVtJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHNsaWRlTnVtYmVyID0gJCh0aGlzKS5kYXRhKCdzbGlkZScpIHx8IDA7XHJcbiAgICAgICAgcHJlcGFyYXRpb25zU2xpZGVyLnNsaWRlVG8oTnVtYmVyKHNsaWRlTnVtYmVyKSk7XHJcbiAgICAgICAgLy9zY3JvbGwgdG8gZWxlbWVudFxyXG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIjcHJlcGFyYXRpb25zU2xpZGVyXCIpLm9mZnNldCgpLnRvcCAtIDIwMFxyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQQUlOIFNZTVBUT01TIEhvdmVyIGJsb2NrXHJcblxyXG4gICAgdmFyICRpbWFnZXNMaXN0ID0gJCgnI3BhaW4tc3luZHJvbS1pbWdzIC5saW5rLXN5bmRyb20nKTtcclxuICAgIHZhciAkc3luZHJvbXNJdGVtcyA9ICQoJy5wYWluLXN5bmRyb21lLWxpc3RfX2l0ZW0nKTtcclxuXHJcbiAgICAkaW1hZ2VzTGlzdC5ob3ZlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN5bmRyb21zSXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1zeW5kcm9tJyk7XHJcbiAgICAgICAgJGltYWdlc0xpc3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJ1tkYXRhLWlkPScgKyAkKHRoaXMpLmRhdGEoJ2ZvcicpICsgJ10nKS5hZGRDbGFzcygnYWN0aXZlLXN5bmRyb20nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNsaWRlcnNJbml0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1RPR0dMRSBDT05UQUNUIElORk9cclxuXHJcbiAgICAkKCcuY29udGFjdF9fdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkKCcuZm9vdGVyIC5ib3R0b20tcm93JykudG9nZ2xlKClcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL1BPUFVQXHJcbiAgICB2YXIgJGNvbnRlbnRCbG9jayA9ICQoJyNwb3B1cCAucG9wdXAtY29udGVudCcpO1xyXG5cclxuXHJcbiAgICAkKFwiLnBvcHVwLXRyaWdnZXJcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTIzNDMpXHJcbiAgICAgICAgdmFyIHRoZW1lID0gJCh0aGlzKS5kYXRhKCd0aGVtZScpO1xyXG4gICAgICAgIHZhciBjb250ZW50SWQgPSAkKHRoaXMpLmRhdGEoJ2NvbnRlbnQtaWQnKTtcclxuICAgICAgICB2YXIgY29udGVudCA9ICQoJyMnICsgY29udGVudElkKS5odG1sKCk7XHJcblxyXG4gICAgICAgICRjb250ZW50QmxvY2suaHRtbChjb250ZW50KTtcclxuXHJcbiAgICAgICAgJChcIiNwb3B1cFwiKS5hZGRDbGFzcyh0aGVtZSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNvdmVybGF5XCIpLmZhZGVJbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNwb3B1cC1jbG9zZSwgI292ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNwb3B1cFwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI292ZXJsYXlcIikuZmFkZU91dCgpO1xyXG4gICAgICAgICRjb250ZW50QmxvY2suaHRtbCgpO1xyXG4gICAgfSlcclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
