(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       
		
		$("ul.main-nav").slicknav({
            prependTo: ".mobile-menu-wrapper"
        });
		
        //new wow().init();

    });


    jQuery(window).load(function(){
        jQuery(".mh-site-preloader-wrapper").fadeOut(300);
    });

}(jQuery));	