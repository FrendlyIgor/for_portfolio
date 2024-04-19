document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i+1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidersPerView: 1.75,
        sldesOffsetBefore: -125
    })
})

bindSwipers(slider1, slider2, slider3, slider4)
