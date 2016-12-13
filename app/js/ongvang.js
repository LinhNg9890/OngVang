var personal = 'Cá Nhân',
    company = 'Doanh Nghiệp';

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function(){ 
        $('.navbar-toggle:visible').click();
});

// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 100
    }
});

$('.forgot-pass').click(function(event) {
    $(".pr-wrap").toggleClass("show-pass-reset");
}); 

$('.pass-reset-submit').click(function(event) {
    $(".pr-wrap").removeClass("show-pass-reset");
});

$('.input-submit').click(function() {
    var valueSelected = $('#sel1 option:selected').text();
    if (valueSelected != personal && valueSelected != company) {
        $('.alert-show').css('display', 'block');
        setTimeout(function() {
            $('.alert-show').css('display', 'none');
        }, 3500)
        return;
    }
    $('.section-sign-up').css('display', 'none');
    $('.sign-up-step2').css('display', 'block');
    if (valueSelected == personal) {
        $('.sign-up-form-personal').css('display', 'block');
        $('.sign-up-form-company').css('display', 'none');
    } else {
        $('.sign-up-form-personal').css('display', 'none');
        $('.sign-up-form-company').css('display', 'block');
    }
})

$('.btn-sign-up-edit').click(function () {
    $('.form-bg').css('display', 'none');
    $('.form-msg-done').css('display', 'block');
    var valueSelected = $('#sel1 option:selected').text();
    if (valueSelected == personal) {
        $('.company-msg').css('display', 'none');
        $('.personal-msg').css('display', 'block');
    } else {
        $('.personal-msg').css('display', 'none');
        $('.company-msg').css('display', 'block');
    }

})

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2),
    zoom: 5
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
