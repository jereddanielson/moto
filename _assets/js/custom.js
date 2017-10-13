/*
$(window).scroll(function() {
var windscroll = $(window).scrollTop();
if (windscroll >= 75) {
$('.top-bar').addClass('fixed');
$('.anchor').each(function(i) {
if ($(this).position().top <= windscroll) {
$('.top-bar a.active').removeClass('active');
$('.top-bar a').eq(i).addClass('active');
}
});

} else {

$('.top-bar').removeClass('fixed');
$('.top-bar a.active').removeClass('active');
}

}).scroll(); */

/* ------------------           Wow              -------------------*/

wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100,
        iteration: 1,
        callback:     function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();

/* variable scroll speed -- for parallax */

/*
var parallaxElements = $('.parallax-1'),
    parallaxQuantity = parallaxElements.length;

$(window).on('scroll', function () {

  window.requestAnimationFrame(function () {

    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement = parallaxElements.eq(i);
      var scrolled = $(window).scrollTop();

      currentElement.css({
        'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
      });
    }
  });

});


var parallaxElements = $('.parallax-2'),
    parallaxQuantity = parallaxElements.length;

$(window).on('scroll', function () {

  window.requestAnimationFrame(function () {

    for (var i = 0; i < parallaxQuantity; i++) {
      var currentElement = parallaxElements.eq(i);
      var scrolled = $(window).scrollTop();

      currentElement.css({
        'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
      });
    }
  });

});
*/

/*
$(document).on('scroll', function() {
    if ($(document).scrollTop() >= 10) {
        $('.logo img').css('height', '0px');
        $('.main_header').css('min-height','208px');
        $('.logo a').css('font-size','28px');
        $('.logo a span').css('font-size','10px');
    } else {
        $('.logo img').css('height', '222px');
    }
});
*/

/*

(function(){

  var parallax = document.querySelectorAll(".parallax-w"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

*/
