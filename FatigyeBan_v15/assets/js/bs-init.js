$(document).ready(function(){
	AOS.init({ disable: 'mobile' });
	$('[data-bs-hover-animate]')
		.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
		.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });
});


    $(document).ready(function () {
        function CloseNav() {
            $(".navbar-collapse").stop().css({ 'height': '1px' }).removeClass('show').addClass("collapse");
            $(".navbar-toggle").stop().removeClass('collapsed');
        }

        $('html').click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("collapse show");
            if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                CloseNav();
            }

        });
    });

