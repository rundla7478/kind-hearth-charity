//jquery-click-scroll
//by syamsul'isul' Arifin

$(document).ready(function(){
    var sectionArray = [1, 2, 3, 4, 5, 6];

    sectionArray.forEach(function(value, index) {
        var sectionId = 'section_' + value;
        var $section = $('#' + sectionId);

        if ($section.length > 0) {
            var offsetSection = $section.offset().top - 90;

            $(document).scroll(function(){
                var docScroll = $(document).scrollTop();
                var docScroll1 = docScroll + 1;

                if (docScroll1 >= offsetSection) {
                    $('.navbar-nav .nav-item .nav-link').removeClass('active');
                    $('.navbar-nav .nav-item .nav-link').addClass('inactive');  
                    $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                    $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
                }
            });

            $('.click-scroll').eq(index).click(function(e){
                e.preventDefault();
                $('html, body').animate({
                    'scrollTop': offsetSection
                }, 300);
            });
        } else {
            console.error('Section not found:', sectionId);
        }
    });

    $('.navbar-nav .nav-item .nav-link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link').eq(0).removeClass('inactive');
});