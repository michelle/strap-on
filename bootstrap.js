$(function() {
	console.log('yay');
	
	$('a').each(function(i) {
		if (i > 0) {
			if ($(this).text().length > 0 && !$(this).parent().is('li') && $(this).siblings('a').length < 3) {
			
				if ($(this).css('font-size') > 15) {
					$(this).addClass('btn-large');
				}
				$(this).addClass('btn');
		
				if (Math.random() > .5) {
					$(this).addClass('btn-primary');
				}
			}
		}
	});
	
	// not working.
	if (window.location.pathname.length < 2) {
		$('div[class*="hero"]').addClass('hero-unit');
	}
	
	// first ul element to turn into navbar.
	var ourul = $('<ul></ul>').addClass('nav');
	$($('ul')[0]).children('li').each(function() {
		var link = $(this).children('a');
		var url = link.prop('href');
		var text = $.trim(link.text());
		var mylink = $('<a></a>').prop('href', url).text(text);
		$('<li></li>').append(mylink).appendTo(ourul);
	});
	$($('ul')[0]).remove();
	
	var title = $('<a></a>').addClass('brand').append(document.title.split(' ')[0]);
	var container = $('<div></div>').addClass('container').append(title).append(ourul);
	var inner = $('<div></div>').addClass('navbar-inner').append(container);
	var navbar = $('<div></div>').addClass('navbar navbar-inverse navbar-fixed-top').append(inner);
	
	$('body').prepend(navbar);
	$('body').css({'padding-top':'50px'});
});