$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.carousel-slide');
    const totalSlides = slides.length;
    const indicators = $('.indicator');

    function updateCarousel() {
        slides.removeClass('active');
        $(slides[currentSlide]).addClass('active');

        indicators.removeClass('active');
        $(indicators[currentSlide]).addClass('active');

        const translateX = -(currentSlide * 20);
        $('.carousel-track').css('transform', `translateX(${translateX}%)`);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }


    $('.carousel-btn-next').on('click', nextSlide);
    $('.carousel-btn-prev').on('click', prevSlide);

    indicators.on('click', function() {
        const slideIndex = $(this).data('slide');
        goToSlide(slideIndex);
    });

    let autoPlayInterval = setInterval(nextSlide, 5000);

    $('.stores-carousel').on('mouseenter', function() {
        clearInterval(autoPlayInterval);
    });

    $('.stores-carousel').on('mouseleave', function() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    $('.carousel-wrapper').on('touchstart', function(e) {
        touchStartX = e.originalEvent.touches[0].clientX;
    });

    $('.carousel-wrapper').on('touchend', function(e) {
        touchEndX = e.originalEvent.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50; 

        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
    }

    updateCarousel();
});

