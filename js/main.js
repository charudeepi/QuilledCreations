/**
 * Created by charuverma1 on 9/21/15.
 */
$(document).ready( function() {

    //Masonry

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

    //Fancy box

    $(".fancybox").fancybox({
        openEffect	: 'elastic',
        closeEffect	: 'elastic'
    });


    //Animate onscroll

    $window = $(window);
    //
    //var windowsize = $window.width();
    //
    //if (windowsize > 1000) {
    //
    //    $('.grid-item').addClass("hidden").viewportChecker({
    //
    //        classToAdd: 'visible animated flipInX',
    //        offset: 10
    //
    //    });
    //
    //}



});