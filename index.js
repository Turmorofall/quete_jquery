$(document).ready(function () {
	$(".single-item").slick({
		dots: true,
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		centerMode: true,
		variableWidth: true,
	});
	$('.container').css({
		background: 'gray',
		'padding-top': '15px',
	});
	$('img').css('width', '400px');
});
