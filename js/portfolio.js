$(document).ready(function(){
  $('#cycle_area').cycle({
		fx: 'scrollHorz',
		speed: 500,
		timeout: 5500,
		pager: '#pager',
		pagerAnchorBuilder: buildThumbnails,
		easing: 'easeInOutCubic',
		pause: true			
	});			
		
});

function buildThumbnails(i, elem){
	src = $(elem).find('img').attr('src');
	title = $(elem).find('h2').text();
	html = '<a href="#" title="' + title + '"><img src="' + src + '" width="50" height="50" alt="'+ title +'" /></a>';
	return html
}