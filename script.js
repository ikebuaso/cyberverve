let slider = new Swiper('.swiper', {
    autoHeight: true,
    direction: 'horizontal',
    effect: 'slide',
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        sliderPerView: 1,
        speed: 400,
    }
});

