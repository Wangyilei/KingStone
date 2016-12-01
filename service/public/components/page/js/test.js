
define( function ( require, exports, module) {
	
	require('jquery');
	
	require('button');
	
	/*require('ball');*/
	
	var ComponentModel = require('model');
	
	$(function() {
		var model = ComponentModel.init( {
			elem : $("#abc")
		});
		
		$("#showmodel").click(function() {
			model.show();
		});
		$('#close-btn').click(function() {
			model.hide();
		});
	})
	
	
	
	
	
})