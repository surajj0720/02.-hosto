/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Hosto
Version: 1.0.0
-------------------------------------------------------------------*/
(function ($) {
    "use strict";

    // Ready Function
    jQuery(document).ready(function ($) {
        var $this = $(window);

        // Home page slider js
        $('.ht_home_slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        // Fancybox Video Popup
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });


        // filter start
        $('.filters ul li').click(function () {
            // $('.filters ul li').removeClass('active');
            // $(this).addClass('active');
            $('.filters ul li').removeClass('after-click');
            $(this).addClass('after-click');
            var data = $(this).attr('data-filter');
            $grid.isotope({
                filter: data,
            });
        });

        var $grid = $('.grid').isotope({
            itemSelector: '.all',
            percentPosition: true,
            masonry: {
                columnWidth: '.all',
            },
        });

        // filter end


        $('.ht_testimonial_slider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

    });
})();

