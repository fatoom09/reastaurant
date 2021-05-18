$(window).scroll(function() {
    var heroHeight = $('header').height();
    var yPosition = $(document).scrollTop();

    if (yPosition <= heroHeight) {
        var effectFactor = yPosition / heroHeight;
        var rotation = effectFactor * (Math.PI / 2 - Math.asin (
            (heroHeight - yPosition) / heroHeight));
            $('.scroll').css({
                'transform':'rotateX('+rotation+'rad)',
            })
    }

    if (yPosition <= heroHeight) {
        $('nav').removeClass('fixed');
    }else {
        $('nav').addClass('fixed');
    }
});


// gsap section

gsap.from('#logo', {
    duration: 1,
    opacity: 0,
    y: -100
})

gsap.from('nav ul li', {
    duration: 1,
    opacity: 0,
    y: -100,
    stagger: .2
})


gsap.from('header h1 ,h2', {
    duration: 2,
    opacity: 0,
    x: -500,
})

