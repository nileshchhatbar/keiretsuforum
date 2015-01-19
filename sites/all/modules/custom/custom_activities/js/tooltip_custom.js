jQuery(document).ready(function() {
	//alert('fasdfds');
	jQuery('.tooltip').tooltipster({
		contentAsHTML: true,
	    content: 'Loading...',
	    functionBefore: function(origin, continueTooltip) {

	        // we'll make this function asynchronous and allow the tooltip to go ahead and show the loading notification while fetching our data
	        continueTooltip();
	        
	        // next, we want to check if our data has already been cached
	        if (origin.data('ajax') !== 'cached') {
	            $.ajax({
	                type: 'POST',
	                url: 'http://localhost/keiretsu/node/11',
	                success: function(data) {
	                	//console.log(jQuery("#node-event-calendar-11", data).html());
	                	tooltip_msg = jQuery("#node-event-calendar-11", data).html();
	                	//node-event-calendar-11
	                    // update our tooltip content with our returned data and cache it
	                    origin.tooltipster('content', tooltip_msg).data('ajax', 'cached');
	                }
	            });
	        }
	    }
	});
});