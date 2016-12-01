define(function(require, exports, module) {
	
   //通过require 引入依赖
   
   var b = require("./b")
	require("./demo.css");
	require('jquery');
	require('handlebars');
	var tpl = require("./tpl.html");
	var compilerTpl = Handlebars.compile(tpl);
	
	$(document.body).append(compilerTpl({name:"Hi Wanglei"}));
	
	exports.afn  = function() {
   		console.log("I am in module a.js");
   		b.bfn();
   }
});