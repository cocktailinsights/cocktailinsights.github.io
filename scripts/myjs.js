$(document).ready(function() {

	var myInterval;
	var interval_delay = 500;
		var is_interval_running = false; //Optional
		interval_function = function () {
			console.log("first run")
			is_interval_running = true;
	     	//button shake
	     	$( ".shake" ).effect( "shake" );
	     }

	     myInterval = setInterval(interval_function, 5000);

	     $(window).focus(function () {
	        clearInterval(myInterval); // Clearing interval if for some reason it has not been cleared yet
	        if  (!is_interval_running) //Optional
	        	myInterval = setInterval(interval_function, 5000);
	    }).blur(function () {
	        clearInterval(myInterval); // Clearing interval on window blur
	        is_interval_running = false; //Optional
	    });


	    
	     $(".owl-carousel").owlCarousel({
            center: true,
            items:2,
            loop:true,
            margin:10,
            autoplay: true,
            nav:true,
            dots:true,
            margin: 70 
        });




	});
