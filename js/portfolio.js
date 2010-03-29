$(document).ready(function(){
  $('#cycle_area').cycle({
		fx: 'scrollHorz',
		speed: 1000,
		timeout: 5500,
		prev: '#prev',
		next: '#next',
		pager: '#pager',
		easing: 'easeInOutCubic',
		pause: true			
	});			
		
});