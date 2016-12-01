/**
 * @description 蒙层板块js
 * @author Lei
 * @time 2016/12/1 15.41
 * @version 1.0
 * 
 * */

define( function ( require, exports, module) {
	//映入model样式	
	require('./index.css');
	
	require('jquery');
	
	var tpl = require('./model.tpl');
		
	$(document.body).append($(tpl));
	
	function modelInit (param) {
		//
		param = param || {};
		var $elem = param.elem;
		if($elem === undefined) {
			throw 'no elem init when use Model Components';
			return;
		}
		if (param.elem instanceof jQuery) {
			//
		}else {
			$elem = $(elem);
		}
		
		var $qfmodel = $('#qf-model');
		var $qfmodelcontent = $("#qf-model-content");
		
		$qfmodelcontent.html($elem.remove());
		
		console.log($qfmodelcontent.html($elem.remove()))

		
		$qfmodelcontent.css({
			width : $elem.width(),
			height : $elem.height(),
			'margin-left' : (0 - $elem.width() / 2),
			'margin-top' : 0 - $elem.height() / 2
		});
		
		return {
			show : function() {
				$qfmodel.addClass('show');
			},
			hide : function() {
				$qfmodel.removeClass('show');
			}
		}
	}
	
	exports.init = modelInit;
	
})
