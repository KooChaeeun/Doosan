// Swiper
var swiper = new Swiper('.mainVisual-banner', {
    loop: true,
    /* autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, */
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
