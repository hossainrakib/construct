$(document).ready(function(){

	//hero active
	$('.slider-active').slick({
		dots: true,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });

 //counter.js
    
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

    /*
	//selector
	$('select').niceSelect();
    */


	// zoom image
	$('.zoom-link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		  }
		// other options
	  });


 

	//contact-loging
	$("#submit").click(function(e){
        var inValid = true;
        $("input[type='email']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        if(inValid == false){
            e.preventDefault();
        }else{
            clear();
            document.getElementById("reply") .innerHTML = "thank fon senting message dear";
            return false;
        }
    });

    //costomar function

    function clear(){
        $('#myaction :input').each(function(){
            $(this).val('');
        });
    }


 

    // scroll-top
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ) {
			$('#scroll').addClass('scroll-top');
			$('#showed').addClass('fa-angle-up');

		} else {
			$('#scroll').removeClass('scroll-top');
			$('#showed').removeClass('fa-angle-up');
		}
	});

	$('#scroll').click(function(){
		$('html, body').animate({
			scrollTop:0
		},300);
	});
 


	//menu-stacky

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('.header-area').addClass('fixed-top');
		}
		else{
			$('.header-area').removeClass('fixed-top');
		}
	})





});

//preload-active
$(window).on('load', function(){
	$('.preloader-area').fadeOut()
});


	
