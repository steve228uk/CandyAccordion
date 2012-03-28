/*
*	CandyAccordion			
*
*	@author:			Stephen Radford, Twitter: @steve228uk
*	@version:			1
*	@Last Update:		28.03.2012
*	@licence:			MIT (http://www.opensource.org/licenses/mit-license.php)
*						GPL	(http://www.gnu.org/licenses/gpl.html)
*	@documentation:		http://www.github.com/steve228uk
*	@feedback:			steve228uk@gmail.com
*
*/

(function($) {

	$.fn.candyaccordion = function(options) {
		
		// Let's put some defaults in here
		var defaults = {
			speed: 250,
			titleClass: 'candytitle',
			textClass: 'candytext'
		}
		
		// Defined the options that were passed in, allows overwriting of defaults
		var options = $.extend({}, defaults, options);
		
		// For each of the ids/classes passed in attach the function
		return this.each(function() {
		
			var obj = $(this);
		
			// Hide the defined class
			$('.' + options.textClass).hide();
			
			// Get the title class
			var title = $('.' + options.titleClass);
			
			// Fire off everything on click
			$(title).click(function() {
				
				if($(this).hasClass('active-' + options.titleClass)){
				
					$(this).next('div').slideUp(options.speed);
					$(this).next('div').removeClass('active-' + options.textClass);
					
					$(this).removeClass('active-' + options.titleClass);
					
				} else {
				
					$('.active-' + options.textClass).slideUp(options.speed, function() {
						$('.active-' + options.textClass).removeClass('active-' + options.textClass);
					});
					
					$('.active-' + options.titleClass).removeClass('active-' + options.titleClass);
					
					$(this).addClass('active-' + options.titleClass);
					$(this).next('div').slideToggle(options.speed, function() {
						$(this).addClass('active-' + options.textClass);
					});
					
				}
				
			});
		
		}); // End this.each
		
	} // End $.fn.candyaccordion

})(jQuery) // End main function and pass jQuery into the function