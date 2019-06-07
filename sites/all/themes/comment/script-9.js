// $Id: script.js,v 1.1.8.1 2009/06/19 02:36:38 shannonlucas Exp $

/**
 * @file script.js
 * General JavaScript functions for the theme. A default file is required to
 * get Drupal to automatically load jQuery.
 */

$(document).ready(function() {
	loginAjax();
});

/* axaj login + signup dialogs */
function loginAjax() {
	$("#header-region #block-block-2 a").click(function(){
		$('.login-ajax').remove();
		var myurl = $(this).attr('href');
		var mycontent = $('<div></div>').addClass('login-ajax').load(myurl + ' form',function(){
			$(this).prepend('<div class="closeme"><a>close</a></div>');
			$('.closeme').click(function(){
				$('.login-ajax').remove();
			});
			$('.login-ajax input[value="Log in"]').before('<div class="my-pswd"><a href="/user/password">Forgotten your password?</a></div>');
			$('.login-ajax input:first').focus();
		});
		$('#header-area').append(mycontent);
		return false;
	});
}
