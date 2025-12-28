// main-visual
const swiper = new Swiper('.main-banner', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            const current = document.querySelector('.current');
            const total = document.querySelector('.total');
            const progressBarFill = document.querySelector('.progress-bar .fill');

            // 현재 페이지 번호
            let currentIndex = this.realIndex + 1;
            current.innerText = currentIndex < 10 ? '0' + currentIndex : currentIndex;

            // 전체 페이지 번호
            const totalSlides = this.slides.filter(
                (slide) => !slide.classList.contains('swiper-slide-duplicate')
            ).length;
            total.innerText = totalSlides < 10 ? '0' + totalSlides : totalSlides;
        },
        // 프로그레스 바
        autoplayTimeLeft(s, time, progress) {
            const fill = document.querySelector('.progress-bar .fill');
            fill.style.width = (1 - progress) * 100 + '%';
        },
    },

    // Swiper 초기화 시 첫 페이지 번호 설정
    init: function () {
        const current = document.querySelector('.current');
        const total = document.querySelector('.total');
        const totalSlides = this.slides.filter(
            (slide) => !slide.classList.contains('swiper-slide-duplicate')
        ).length;
        current.innerText = '01';
        total.innerText = totalSlides < 10 ? '0' + totalSlides : totalSlides;
    },
});

// about
const aboutSwiper = new Swiper('.about-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,     
    loop: false,
    simulateTouch: true,
    grabCursor: true,           
    navigation: {
        nextEl: '.about-next',
        prevEl: '.about-prev',
    },
});
