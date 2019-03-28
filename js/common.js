$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
//селект
$(document).ready(function () {
	$('.select_sort').SumoSelect({});
});		
//Табы
$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//ACCORDEON
$(function() {
	var accordion = function(){
		var data = $('.accordion').attr('data-accordion')
		
		$('.accordion-header').on('click', function(){
					$(this).next('.accordion-body').not(':animated').slideToggle()
		})
	}
	accordion();    
	
	});
	$('.accordion-header').on('click', function(e){
		e.preventDefault();
			$(this)
				.toggleClass('close')
				.siblings('div')
				.slideToggle();  
	});

/*таблица */
$(document).ready(function () {	$('table').basictable({
	breakpoint: 680
});
});
/*fancybox*/
$(function() {
	$(".js-q-fancybox").fancybox({
		protect: true,
		buttons : [
			'zoom',
			'thumbs',
			'close'
		]
	})
	});
//count
$('.num').counterUp({delay: 10,time: 1000})
// HOME SLIDER
$(function() {
$(".owl-slider").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    loop:true,
    nav: false,
    dots: false,
    touchDrag:false,
    mouseDrag:false,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
    autoplay : true
});
});
//audio
$( function() { $( 'audio' ).audioPlayer(
	{
		classPrefix: 'player', // default value: 'audioplayer'
		strPlay: 'Play', // default value: 'Play'
		strPause: 'Pause', // default value: 'Pause'
		strVolume: 'Volume', // default value: 'Volume'
	 }
); } );
//Gallery carousel
$(function() {
$(".slider_gallery").owlCarousel({
    items:6,
    loop:true,
    nav:false,
    dots:true,
    touchDrag:true,
    mouseDrag:true,
    margin:5,
    stagePadding:0,
    smartSpeed:450,
    responsive:{
        0:{
            items:1,
            dots: false
        },    	
        480:{
            items:2,
        },
         520:{
            items:3,
        },
        768:{
            items:4,
        },
        992:{
            items:5,
        }
    }
});
});
$(function() {

	$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
			if ($(".top_mnu ul").is(":visible")) {
					$(".top_text").css("opacity", "1");
					$(".top_mnu ul ").fadeOut(600);
					$(".top_mnu ul li a").removeClass("fadeInUp animated");
			} else {
					$(".top_text").css("opacity", ".1");
					$(".top_mnu ul").fadeIn(600);
					$(".top_mnu ul li a").addClass("fadeInUp animated");
			};
	});

});


$('.open_price button').html('Раскрыть прайс полностью');

$('.open_price button').on('click', function(e){
  e.preventDefault();
  
  var
    $this = $(this),
    content = $('.tab_item .table_hide');  
  
  
  if(!$this.hasClass('trigger')){
    $this.addClass('trigger');
    $this.html('Скрыть прайс полностью');
    
    content.slideDown();
  } else {
    $this.removeClass('trigger');
    $this.html('Раскрыть прайс полностью');
    
    content.slideUp();
  }
});


