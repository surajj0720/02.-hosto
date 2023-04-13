/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Hosto
Version: 1.0.0
-------------------------------------------------------------------*/
(function($){
    "use strict";
  
    // Ready Function
    jQuery(document).ready(function($){
        var $this = $(window);

        // Home page slider js
        $('.ht_home_slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

    });
})();