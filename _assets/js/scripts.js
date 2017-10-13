// Because of the way this file is set up, this works the same
// as a document.ready statement.
// Add your code, either within the misc: section, or create your own function
// if you create your own, make sure to add a line at the bottom to run that code
// ie: Engine.ui.misc();

$(function() {
	"use strict";
	var Engine = {
		ui: {
			navSelectedState: function() {
				// Active Nav 
				var path = location.pathname.substring(1);
				if (path) { // if there is a value for the varible path
					$(".menu a").each(function(){
						var $this = $(this);
						if ($this.attr('href') === window.location.pathname + window.location.search || $this.attr('href') === window.location.href) {
							$this.addClass('selected').parents('li').addClass('selected'); 
						}
					});
                    
					
					/*-- for the aside nav - if path equals the href give the parent a class of selected - example: aside ul li.selected a --*/
					$('aside li a[href$="' + path + '"]').parent().addClass('selected');

					/*-- for the aside nav - if path equals the href of the drop down links give the top level link a class of selected - example: aside ul li.selected a --*/
					$('aside ul ul a[href$="' + path + '"]').parents().not('.is-accordion-submenu-parent').addClass('selected');
					
					$('aside ul ul a[href$="' + path + '"]').parents('.is-accordion-submenu-parent').addClass('is-selected');
				};
			}, // end navSelectedState
		
			fastclick: function() {
				FastClick.attach(document.body);
			}, // end fastclick
			
			placeholder: function () {
				$('input, textarea').placeholder();
			}, // end placeholder
		
			misc: function () {
				
                //=====MatchHeight========//
               
                $('.matchheight-me').matchHeight();
                
                
                //=======search============//
				$('.search-icon span').click(function(){
					$('.search-container').slideToggle();
				});

	
				// When user clicks on forgot password link:
				// Sign In form hides, Forgot password form shows
				$("#btn-password").on('click', function (e) {
					e.preventDefault();
					$("#form-login").fadeOut(function(){
						$("#form-password").fadeIn();
					});
				});
				// When user clicks on Nevermind link:
				// Sign In form shows, Forgot password form hides
				$("#btn-login").on('click', function (e) {
					e.preventDefault();
					$("#form-password").fadeOut(function(){
						$("#form-login").fadeIn();
					});
				});
				// Will show the Create Account form once clicked
				$("#needCreate").on('click', function (e) {
					e.preventDefault();
					$(".create-form").fadeIn();
				});	
				
				 $(".parallax").simpleParallax();
				 
				 /* Fade In Elements */
				$('.hideme').bind('inview', function (event, visible) {
					if (visible === true) {
						var offset = $(this).offset();
						$(this).removeClass('hideme');
					}
				});
				$('.p-image-02').bind('inview', function (event, visible) {
					if (visible === true) {
						$('.dontHide').removeClass('hideme-slide');
					}
				});
		
				$('.newtr').bind('inview', function (event, visible) {
					if (visible === true) {
						$('.dontHide').removeClass('hideme-slide2');
					}
				});
				

				 /* END Fade In Elements */ 
				 
					/* Scroll */
						$(window).bind("scroll", function(){
							
							/* Scroll Top Btn */
							if ($(this).scrollTop() > $(window).height()-1) {
								$('.scrollup').fadeIn();
							} else {
								$('.scrollup').fadeOut();
							}
						});
				 
				 	$('.scrollup').click(function(){
						$("html, body").animate({ scrollTop: 0 }, 1000);
						return false;
					});
				 
				/* Skills Animation */
					
						var value;
						$('.skill-in').bind('inview', function (event, visible) {
							if (visible === true) {
							// element is now visible in the viewport
							$(this).each(function(){
								value = $(this).attr('title');
								$(this).animate({ "width": value+'%' }, 2000);
							});
							}
						});
		
					var value;
					$('.skill-in').each(function(){
						value = $(this).attr('title');
						$(this).css("width", value+'%');	
					});
				 /* END Skill BAR */ 
				 
				 /* Menu Navigation */ 
                
                 
				 $('.top-bar a[href*=#]').click(function() {
				 if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
					 var $target = $(this.hash);
                     
					 $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
					 if ($target.length) {
						 var targetOffset = $target.offset().top;
                         $('html,body').animate({scrollTop: targetOffset-75}, 1400, 'easeOutExpo');
                         return false;
						}
					}
 				 });
                 
                
                
                
                
		 		/* END Menu Navigation */ 
                
                 var kk = window.location.host
                 $('.menu li').find('a').each(function() {
                          
                          var urls = $(this).attr('href');
                     		
                          var new_href = 'http://' + kk + '' + urls
                         
                          
                          $(this).attr("href", new_href )
				});
               
                      
                   
				var sections = $('.anchor')
                      , nav = $('.menu a')
                      , nav_height = nav.outerHeight();
                    
                    $(window).on('scroll', function () {
                      var cur_pos = $(this).scrollTop();
                   
                      sections.each(function() {
                        var top = $(this).offset().top - nav_height,
                            bottom = top + $(this).outerHeight();
                        
                        if (cur_pos >= top && cur_pos <= bottom) {
                          nav.find('.menu a').removeClass('active');
                          sections.removeClass('active');
                          
                          $(this).addClass('active');
                          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
                          
                        }
                      });
                       
                    }); 
          
			
			$(function() {
				//Simple filter controls
				$('.simplefilter li').click(function() {
					$('.simplefilter li').removeClass('active');
					$(this).addClass('active');
				});
				
			})
			
			 
                 $( window ).load(function() {
					$('.filtr-container').filterizr();
				}); 
        
			
	
			}, // end misc
			

			
			/* Slider AutoChanging Title */
				 loadTitleAnimated : function(){
					var myInterval;
					var contador = 1;
					var myFunc = function() {
						var cur = $('.slider_desc ul li').length;
						//alert(contador);
						if(cur == contador) {
								$('.slider_desc ul li.t-current').removeClass('t-current');
								$('.slider_desc ul li').first().addClass('t-current');
								contador = 1;
							} else {
								contador++;
								$('.slider_desc ul li.t-current').removeClass('t-current').next().addClass('t-current');
							}
					};
					myInterval = setInterval(myFunc, 5000); // Set Animation Interval in Miliseconds
				}
	      /* End Slider AutoChanging Title */
            
          
         
            

		}, // end ui

		utils: {

			sliders: function() {
				$('.home_slider').slick({
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 750,
					dots: false,
					infinite: true,
					fade: true,
					pauseOnHover: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				});
				
				$('.amazing-slider').slick({
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 750,
					dots: true,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				});
				
				
				$('.portfolio-slider').slick({
					speed: 750,
					dots: false,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					slide: 'li',
					arrows: true,
				});


				
				 $('.testimonial_slider').slick({
					dots: true,	
					speed: 750,
					arrows: true,
					autoplay: true,
					touchMove: true,
                    slide: 'div',
					rows:'2',
					slidesPerRow:'1',
					responsive: [
					{
					  breakpoint: 801,
					  settings: {
						slidesPerRow: 1,
				
					  }
					}
				  ]
				});
				
				$('.feature_gallery').slick({
					  arrows: true,
					  speed: 1000,
					  slidesToShow:4,
					  slidesToScroll:1,
					  centerMode: false,
					  autoplay: true,
					  touchMove: true,		
					  slide: 'li',
					  responsive: [
						{
						  breakpoint: 1025,
						  settings: {
							slidesToShow:3,
							slidesToScroll: 1
						  }
						},
						{
						  breakpoint:801,
						  settings: {
							slidesToShow:2,
							slidesToScroll: 1
						  }
						},
						{
						  breakpoint:640,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}   
					  ]
				});
				
			
				$('.brands-logo-slider').slick({
					  arrows: false,
					  speed: 800,
					  slidesToShow: 5,
					  slidesToScroll: 1,
					  centerMode: false,
					  autoplay: true,
					  touchMove: true,		
					  slide: 'li',
					  responsive: [
						{
						  breakpoint: 1025,
						  settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						  }
						},
						{
						  breakpoint: 767,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						  }
						},
						{
						  breakpoint: 642,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						  }
						}   
					  ]
				});
				

			},
			
			
			// Counter
			counter: function() {
				$('.count').each(function () {
					$(this).prop('Counter',0).animate({
						Counter: $(this).text()
					}, {
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				}); 

			},
			
			
			
			// end Counter
		
			magnific: function() {
				
				$('#photogallery').magnificPopup({
					delegate: 'a', 
					type: 'image',
					gallery:{
						enabled:true
					}
					// other options
				});
                

				$('#photogallery-all').magnificPopup({
					delegate: 'a', 
					type: 'image',
					gallery:{
						enabled:true
					}
					// other options
				}); 
				       

			},
			
			 // Services RollOver Info //
			 loadServices : function(){
				$(".sl-element figure").mouseenter(function(){
					$(this).parent().find(".s-roll").addClass('visible');
				});
				$(".sl-element figure").mouseleave(function(){
					$(this).parent().find(".s-roll").removeClass('visible');
				});
			 }
		    // end Services RollOver Info //
            



		}, // end utils


	};
	Engine.ui.navSelectedState();
	Engine.ui.fastclick();
	Engine.ui.placeholder();
	Engine.ui.misc();
	Engine.utils.sliders();
	Engine.ui.loadTitleAnimated();
	Engine.utils.counter();
	Engine.utils.magnific();
	Engine.utils.loadServices();
	
});