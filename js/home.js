// header section starts

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


// Api section starts 


fetch('http://forkify-api.herokuapp.com/api/search?&q=pizza') 
.then( function(param) {return param.json();})

.then( function(param2) {
    document.querySelector('.all .img1').src = param2.recipes[5].image_url;
    document.querySelector('.all .h1').innerHTML = param2.recipes[8].title;

    document.querySelector('.all .img2').src = param2.recipes[13].image_url;
    document.querySelector('.all .h2').innerHTML = param2.recipes[13].title;

    document.querySelector('.all .img3').src = param2.recipes[10].image_url;
    document.querySelector('.all .h3').innerHTML = param2.recipes[10].title;

    document.querySelector('.all .img4').src = param2.recipes[26].image_url;
    document.querySelector('.all .h4').innerHTML = param2.recipes[26].title;

    document.querySelector('.all .img5').src = param2.recipes[1].image_url;
    document.querySelector('.all .h5').innerHTML = param2.recipes[1].title;

    document.querySelector('.all .img6').src = param2.recipes[27].image_url;
    document.querySelector('.all .h6').innerHTML = param2.recipes[2].title;
});

function Humberger() {

fetch('http://forkify-api.herokuapp.com/api/search?&q=pizza') 
.then( function(param) {return param.json();})

.then( function(param2) {
    document.querySelector('.all .img5').src = param2.recipes[26].image_url;
    document.querySelector('.all .h5').innerHTML = param2.recipes[26].title;

    document.querySelector('.all .img6').src = param2.recipes[13].image_url;
    document.querySelector('.all .h6').innerHTML = param2.recipes[13].title;

})

    document.querySelector('.item1').style.display = "none";
    document.querySelector('.item2').style.display = "none";
    document.querySelector('.item3').style.display = "none";
    document.querySelector('.item4').style.display = "none";
}

function Pizza() {

    fetch('http://forkify-api.herokuapp.com/api/search?&q=pizza') 
    .then( function(param) {return param.json();})
    
    .then( function(param2) {
        document.querySelector('.all .img4').src = param2.recipes[10].image_url;
        document.querySelector('.all .h4').innerHTML = param2.recipes[10].title;
    
        document.querySelector('.all .img5').src = param2.recipes[5].image_url;
        document.querySelector('.all .h5').innerHTML = param2.recipes[8].title;
    
        document.querySelector('.all .img6').src = param2.recipes[27].image_url;
        document.querySelector('.all .h6').innerHTML = param2.recipes[2].title;
    
    })
    
        document.querySelector('.item1').style.display = "none";
        document.querySelector('.item2').style.display = "none";
        document.querySelector('.item3').style.display = "none";
        document.querySelector('.item4').style.display = "block";
}

function Dessert() {

    fetch('http://forkify-api.herokuapp.com/api/search?&q=pizza') 
    .then( function(param) {return param.json();})
    
    .then( function(param2) {
    
        document.querySelector('.all .img6').src = param2.recipes[1].image_url;
        document.querySelector('.all .h6').innerHTML = param2.recipes[1].title;
    
    })
    
        document.querySelector('.item1').style.display = "none";
        document.querySelector('.item2').style.display = "none";
        document.querySelector('.item3').style.display = "none";
        document.querySelector('.item4').style.display = "none";
        document.querySelector('.item5').style.display = "none";
    }    

function All() {

    fetch('http://forkify-api.herokuapp.com/api/search?&q=pizza') 
.then( function(param) {return param.json();})

.then( function(param2) {
    document.querySelector('.all .img1').src = param2.recipes[5].image_url;
    document.querySelector('.all .h1').innerHTML = param2.recipes[8].title;

    document.querySelector('.all .img2').src = param2.recipes[13].image_url;
    document.querySelector('.all .h2').innerHTML = param2.recipes[13].title;

    document.querySelector('.all .img3').src = param2.recipes[10].image_url;
    document.querySelector('.all .h3').innerHTML = param2.recipes[10].title;

    document.querySelector('.all .img4').src = param2.recipes[26].image_url;
    document.querySelector('.all .h4').innerHTML = param2.recipes[26].title;

    document.querySelector('.all .img5').src = param2.recipes[1].image_url;
    document.querySelector('.all .h5').innerHTML = param2.recipes[1].title;

    document.querySelector('.all .img6').src = param2.recipes[27].image_url;
    document.querySelector('.all .h6').innerHTML = param2.recipes[2].title;
});

    document.querySelector('.item1').style.display = "block";
    document.querySelector('.item2').style.display = "block";
    document.querySelector('.item3').style.display = "block";
    document.querySelector('.item4').style.display = "block";
    document.querySelector('.item5').style.display = "block";

}

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

gsap.from('header img', {
    duration: 2,
    opacity: 0,
    y: -100,
})

gsap.from('header h1 ,h5', {
    duration: 2.5,
    opacity: 0,
    x: -500,
})


