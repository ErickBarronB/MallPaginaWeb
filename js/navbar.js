    
        $(document).ready(function() {
            $('.menu-toggle').on('click', function() {
                $('.navbar-menu').toggleClass('active');
            });

            $('.navbar-menu a').on('click', function() {
                if ($(window).width() <= 968) {
                    $('.navbar-menu').removeClass('active');
                }
            });

            $(document).on('click', function(e) {
                if ($(window).width() <= 968) {
                    if (!$(e.target).closest('.navbar').length) {
                        $('.navbar-menu').removeClass('active');
                    }
                }
            });
        });