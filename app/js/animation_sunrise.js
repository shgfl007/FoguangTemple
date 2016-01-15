$(document).ready(function() {

	function getRandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	}

	function starGenerate(){

		for (var i = 0;i<100;i++) {
			var $star;
			$star = $('<div class="star"></div>');
			$('.stars').append($star);
		}

		starAnimate($('.star'));
	}

	var svgWidth = $('div.landscape').width();

	var svgHeight = $('div.landscape').height();

	function starAnimate(star){
		star.velocity({
			scale: function() {
				return getRandomInt(50,120) + '%';
			},
			translateY:
				function() {
					return getRandomInt(0,svgHeight/2.5) + 'px';
				},
			translateX:
				function() {
					return getRandomInt(0,svgWidth) + 'px';
				},
			backgroundColorRed: function() {
				return getRandomInt(70,100) + '%';
			},
			backgroundColorGreen: function() {
				return getRandomInt(70,100) + '%';
			},
			backgroundColorBlue: function() {
				return getRandomInt(70,100) + '%';
			}
			},{
				duration:0,
			}
		).velocity({
			opacity:1
		},{
			duration:3000
		});
	}

	function observeStars() {
		$('.tube').velocity({
			rotateZ: '30deg',
			rotateX: '-20deg',
			translateY: '210%'
		},{
			duration:0
		}).velocity({
			translateY: ['150%', '210%']
		},{
			duration:1000
		}).velocity({
			rotateZ: ['-40deg','30deg'],
			rotateX: ['20deg','-20deg']
		},{
			duration:3000
		});
	}

	setTimeout(function(){
		observeStars();
	},5500);

	setTimeout(function(){
		starGenerate();
	},6000);

	// var skyGradientTwilight = ['#ffeecc','#e29ae5','#869cee','#509aee','#4988e5'];
	//
	// var skyGradientEvening = ['#05257d','#03287d','#02389d','#0247c6','#015cc9'];
	//
	// var skyGradientNight = ['#05154d','#030005','#020005','#010005','#010005'];

	var skyGradientNight = ['#ffeecc','#e5a8a8','#869cee','#509aee','#4988e5'];

	var skyGradientEvening = ['#05257d','#03287d','#02389d','#0247c6','#015cc9'];

	var skyGradientTwilight = ['#05154d','#030005','#020005','#010005','#010005'];

	$('#SVGID_1_ stop').each(function(index){
		$(this).velocity({
			stopColor: skyGradientTwilight[index]
		},{
			easing:'easeOutQuart',
			duration:3000
		});
	}).each(function(index){
		$(this).velocity({
			stopColor: skyGradientEvening[index]
		},{
			easing:'linear',
			duration:1500
		});
	}).each(function(index){
		$(this).velocity({
			stopColor: skyGradientNight[index]
		},{
			easing:'linear',
			duration:2000
		});
	});

	$('#Hills_in_Distance_1 path').velocity({
		fill: '#1a2b20'
	},{
		easing:'linear',
		delay:1000,
		duration:5500
	});

	$('#Hills_in_Distance_2 path').velocity({
		fill: '#44330E'
	},{
		easing:'linear',
		delay:1000,
		duration:5500
	});

	$('#River_Background rect').velocity({
		fill: '#000'
	},{
		easing:'linear',
		delay:2000,
		duration:2500
	});

	$('#Observatory path').velocity({
		fill: 'XMLID_2_'
	},{
		easing:'linear',
		delay:2000,
		duration:2500
	});

	$('#Distant_Left_Ridge path').velocity({
		fill: '#19130D'
	},{
		easing:'linear',
		delay:1000,
		duration:550
	}).velocity({
		fill: '#4C3325'
	},{
		easing:'easeIn',
		delay:1500,
		duration:2500
	}).velocity({
		fill: '#593F2A'
	},{
		easing:'linear',
		duration:1000
	});

	$('#Right_Ridge path').velocity({
		fill: '#19130D'
	},{
		easing:'linear',
		delay:1000,
		duration:550
	}).velocity({
		fill: '#4C3325'
	},{
		easing:'easeIn',
		delay:1500,
		duration:2500
	}).velocity({
		fill: '#593F2A'
	},{
		easing:'linear',
		duration:1000
	});

	// var sunGradient = ['#FFEE80','#FFC261','#FF5121','#05257d','#005cc9'];

	var sunGradient = ['#FCFFC7','#05257d','#FF5121','#FFC261','#FFEE80'];

	$('#SVGID_2_ stop').velocity({
		stopColor: sunGradient[2]
	},{
		easing:'linear',
		duration:2250,
		delay:700
	}).velocity({
		stopColor: sunGradient[3]
	},{
		easing:'linear',
		duration:1000
	}).velocity({
		stopColor: sunGradient[4]
	},{
		easing:'linear',
		duration:2250
	}).velocity({
		stopColor: sunGradient[0]
	},{
		easing:'linear',
		duration:1250
	});

	//river gradient animations
	$('#SVGID_3_ stop').velocity({
		stopColor: '#04182b'
	},{
		easing:'linear',
		duration:2250,
		delay:700
	}).velocity({
		stopColor: '#1e2a35'
	},{
		easing:'linear',
		duration:300,
	}).velocity({
		stopColor: '#1e2a35'
	},{
		easing:'linear',
		duration:800,
		delay:700
	}).velocity({
		stopColor: '#233c49'
	},{
		easing:'linear',
		duration:1250,
		delay:700
	});

	$('#Sun circle, #SVGID_2_').velocity({
		cy: '-=200',
		cx: '+=400'
	},{
		easing:'easeOut',
		duration:14000
	});

});
