var nonLinearStepSlider = document.getElementById('slider');

noUiSlider.create(nonLinearStepSlider, {
	start: [ 10],
	connect: 'lower',
	range: {
		'min': [ 10, 10 ],
		'20%': [ 100,  100 ],
		'40%': [ 1000, 1000 ],
		'60%': [ 10000, 10000 ],
		'80%': [ 100000, 100000 ],
		'max': [ 1000000 ]
	},
	format: wNumb({
		decimals: 0,
		thousand: ',',
		prefix: '$ ',
	}),
	pips: {
		mode: 'steps',
		density:3
	}
});


var nonLinearStepSliderValueElement = document.getElementById('slider-value');

nonLinearStepSlider.noUiSlider.on('update', function( values, handle ) {
	nonLinearStepSliderValueElement.innerHTML = values[handle];
});

$(document).ready (function(){
	// Estimated pricing computation
	var number;
	var price;
	var amount;
	var per;
	var sliderValue;
	var moneyFormat = wNumb({
		mark: '.',
		thousand: ',',
		prefix: '$ '
	});
	estimate = document.getElementById('estimate');
	percentage = document.getElementById('per');


	sliderValue= slider.noUiSlider.get();
	number = Number(sliderValue.replace(/[^0-9\.]+/g,""));
	per = 0.1;
	amount = 1;
	price = moneyFormat.to(amount);
	estimate.innerHTML = price;
	percentage.innerHTML = (per* 100) + "%";

	slider.noUiSlider.on('slide.one', function(){
		sliderValue= slider.noUiSlider.get();
		number = Number(sliderValue.replace(/[^0-9\.]+/g,""));

		if (number < 10){
			per = 0;
			amount = 10;
			price = moneyFormat.to(amount);
			estimate.innerHTML = price;
			percentage.innerHTML = (per* 100) + "%";
		}else if ((number < 10001) && (number > 9)){
				per = 0.1;
				payable = per * number;
				amount = Math.round(payable);
				price = moneyFormat.to(amount);
				estimate.innerHTML = price;
				percentage.innerHTML = (per* 100) + "%";
		}else if ((number > 10000) && (number < 100001)){
				per = 0.06;
				payable = per * number;
				amount = Math.round(payable);
				price = moneyFormat.to(amount);
				estimate.innerHTML = price;
				percentage.innerHTML = (per* 100) + "%";
		}else if ((number > 100000) && (number < 1000000)) {
			per = 0.04;
			payable = per * number;
			amount = Math.round(payable);
			price = moneyFormat.to(amount);
			estimate.innerHTML = price;
			percentage.innerHTML = (per* 100) + "%";
		}else {
			estimate.innerHTML = " Contact Us";
			percentage.innerHTML = "";
		}


	});

})
