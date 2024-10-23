$(document).ready(function() {
    var swiper = new Swiper('.review-slider', {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1370: {
                slidesPerView: 3,
            },
        },
    });
});