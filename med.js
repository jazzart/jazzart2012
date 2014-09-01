

$("document").ready(function() {
	
		//alert (active);
		
	/*	if ($(window).width() <= 1300){
			alert('midsize');
	}  */

		//detect IE and if it's IE, show reverse button for accordion slideshow'
		/* if (window.ActiveXObject) {
			$("#reverse").css({'display':'block'})
		}
		else{ 
			$("#reverse").css({'display':'none'})
		}; */
		


var nm = 'jazzart';
var lm = '.eu';
var dmn = '@gm';
var endg = 'ail.com';

$("#openshow").html(nm + lm + dmn + endg);

//roll-down menus logics

	function showFn (evt){
			$("#products").fadeIn(300);
	};
	function show2Fn (evt){
			$("#about").fadeIn(300);
	};
	function show3Fn (evt){
			$("#more").fadeIn(300);
	};
	 function hideFn (evt){
			$("#products, #about, #more").fadeOut(100);
			
	}; 
	
function hideAll (evt){
			$("#products", "#about", "#more").hide(100);
			
	}; 
	
	$("#hProducts").bind('mouseover', showFn);
	$("#products").bind('mouseleave', hideFn);
	$("#hAbout").bind('mouseover', show2Fn);
	$("#about").bind('mouseleave', hideFn);
	$("#hMore").bind('mouseover', show3Fn);
	$("#more").bind('mouseleave', hideFn);	
	$("#header").bind('mouseleave', hideFn);	
	$("#content").bind('mouseover', hideAll); 

/* $("#reverse").click(function(){
		location.reload();
});   */


	


	
	
function gotoProductsPage (evt) {
	window.location = 'products.html';
};

function gotoWarrantyPage (evt) {
	window.location = 'warranty.html';
};

function gotoTechPage (evt) {
	window.location = 'technologies.html';
};

function gotoCostsPage (evt) {
	window.location = 'costs.html';
};




	


});