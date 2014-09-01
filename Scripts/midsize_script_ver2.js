var active = 'pp1';


$("document").ready(function() {
	
		//alert (active);

/*		alert(window.location);
		
		if ($(window).width() <= 1300){
			alert('midsize');
		} */

		//detect IE and if it's IE, show reverse button for accordion slideshow'
		if (window.ActiveXObject) {
			$("#reverse").css({'display':'block'})
		}
		else{ 
			$("#reverse").css({'display':'none'})
		};
		
		
		
		
$("#panel2").bind('click', P2Left);
$("#panel3").bind('click', P3Left);
$("#panel4").bind('click', P4Left);


var nm = 'jazzart';
var lm = '.eu';
var dmn = '@gm';
var endg = 'ail.com';

$("#openshow").html(nm + lm + dmn + endg);

//navigation logics

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

$("#reverse").click(function(){
		location.reload();
	}); 


	


	
	check();
	
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


/* function checkPosition () {
			if (active == 'pp1') {
					$("#panel2").css({'left':'625'});
					$("#panel3").css({'left':'700'});
					$("#panel3").css({'left':'770'});
			} else if (active == 'pp2') {
					$("#panel2").css({'left':'150'});
					$("#panel3").css({'left':'700'});
					$("#panel3").css({'left':'770'});	
			} else if (active == 'pp3') {
					$("#panel2").css({'left':'150'});
					$("#panel3").css({'left':'225'});
					$("#panel3").css({'left':'770'});	
			} else if (active == 'pp4') {
					$("#panel2").css({'left':'150'});
					$("#panel3").css({'left':'225'});
					$("#panel3").css({'left':'300'});	
			} else {
					$("#panel2").css({'left':'625'});
					$("#panel3").css({'left':'700'});
					$("#panel3").css({'left':'770'});
			};
	
}; */


	
function check () {
		//alert (active);

		
		if (active == 'pp1') {
				$("#panel1").unbind('click', P234Right);
				$("#panel1").unbind('click', P2Right);
				$("#panel1").unbind('click', P23Right);
				$("#panel1").bind('click', gotoCostsPage);
				$("#panel2").unbind('click', gotoWarrantyPage);
				$("#panel3").unbind('click', gotoTechPage);
				$("#panel4").unbind('click', gotoProductsPage);
				$("#panel2").unbind('click', P34Right);
				$("#panel2").bind('click', P2Left);
				$("#panel3").unbind('click', P3Left);
				$("#panel3").bind('click', P23Left);
		};
		if (active == 'pp2') {
				
				$("#panel1").unbind('click', gotoCostsPage);
				$("#panel3").unbind('click', gotoTechPage);
				$("#panel4").unbind('click', gotoProductsPage);
				$("#panel1").unbind('click', P234Right);
				$("#panel1").unbind('click', P23Right);
				$("#panel1").bind('click', P2Right);
				$("#panel2").unbind('click', P34Right);
				$("#panel2").unbind('click', P2Left);
				$("#panel2").bind('click', gotoWarrantyPage);
				$("#panel3").unbind('click', P23Left);
				$("#panel3").bind('click', P3Left);
				
		};
		if (active == 'pp3') {
				
				$("#panel1").unbind('click', gotoCostsPage);
				$("#panel2").unbind('click', gotoWarrantyPage);
				$("#panel4").unbind('click', gotoProductsPage);
				$("#panel1").unbind('click', P234Right);
				$("#panel1").unbind('click', P2Right);
				$("#panel1").bind('click', P23Right);
				$("#panel2").unbind('click', P34Right);
				$("#panel2").unbind('click', P2Left);
				$("#panel3").unbind('click', P23Left);
				$("#panel3").unbind('click', P3Left);
				$("#panel3").bind('click', gotoTechPage);
		};
		if (active == 'pp4') {
				alert ('HIT!');
				$("#panel1").unbind('click', gotoCostsPage);
				$("#panel2").unbind('click', gotoWarrantyPage);
				$("#panel3").unbind('click', gotoTechPage);
				$("#panel1").unbind('click', P2Right);
				$("#panel1").unbind('click', P23Right);
				$("#panel1").bind('click', P234Right);
				$("#panel2").unbind('click', P2Left);
				$("#panel2").bind('click', P34Right);
				$("#panel3").unbind('click', P23Left);
				$("#panel3").unbind('click', P3Left);
				$("#panel3").bind('click', P3Right);
				$("#panel4").bind('click', gotoProductsPage);
		};
};

	
	
//vertical accordion slideshow panels logic &  animation


function P2Left (evt) {
	$('#panel2').animate({left: '150'}, 200, function () {
		active = 'pp2'; 
		check();
		return active;
	});
};
function P3Left (evt) {
	$('#panel3').animate({left: '225'}, 200, function () {
		active = 'pp3'; 
		check();
		return active;
	});
};

function P4Left (evt) {
	$('#panel4').animate({left: '300'}, 200, function () {
		active = 'pp4'; 
		check();
		return active;
	});
};
function P2Right (evt) {
	$('#panel2').animate({left: '625'}, 200, function () {
		active = 'pp2'; 
		check();
		return active;
	});
};
function P3Right (evt) {
	$('#panel3').animate({left: '700'}, 200, function () {
		active = 'pp3'; 
		check();
		return active;
	});
};
function P4Right (evt) {
	$('#panel4').animate({left: '770'}, 200, function () {
		active = 'pp4'; 
		check();
		return active;
	});
};
function P23Left (evt) {
		$('#panel2').animate({left: '150'}, 200, function () {

		});
		$('#panel3').animate({left: '225'}, 200, function () {
		active = 'pp3'; 
		check();
		return active;
		});
		check();
};
function P234Left (evt) {
		$('#panel2').animate({left: '150'}, 200, function () {

		});
		$('#panel3').animate({left: '225'}, 200, function () {

		});
		$('#panel4').animate({left: '300'}, 200, function () {
		active = 'pp4'; 
		check();
		return active;
		});
		check();
};
function P34Right (evt) {
		$('#panel3').animate({left: '700'}, 200, function () {

		});
		$('#panel4').animate({left: '770'}, 200, function () {
		active = 'pp4'; 
		check();
		return active;
		});
		check();
};
function P234Right (evt) {
		$('#panel2').animate({left: '625'}, 200, function () {

		});
		$('#panel3').animate({left: '700'}, 200, function () {

		});
		$('#panel4').animate({left: '770'}, 200, function () {
		active = 'pp4'; 
		check();
		return active;
		});
		check();
};

/*
function pn2left (evt) {
	$("#panel2").animate({left: '150'}, 200);
	pp2 = 'left';
	active = 'pp2';
	$("#panel2").unbind('click', pn2left);
	$("#panel2").bind('click', gotoWarrantyPage);
	checkPosition ();
	check();
};

function pn3left (evt) {
	if (pp2 == 'right') {
		$("#panel2").animate({left: '150'}, 200, function () {
			$("#panel3").animate({left: '225'}, 200);
		});	
	} else {
	//$("#panel2").animate({left: '150'}, 200);
	$("#panel3").animate({left: '225'}, 200);
	};
	pp3 = 'left';
	active = 'pp3';
	$("#panel3").unbind('click', pn3left);
	$("#panel3").bind('click', gotoTechPage);
	checkPosition ();
	check();
};

function pn4left (evt) {
	$("#panel2").animate({left: '150'}, 200);
	$("#panel3").animate({left: '225'}, 200);
	$("#panel4").animate({left: '300'}, 200);
	pp4 = 'left';
	active = 'pp4';
	$("#panel2").bind('click', pn3right);
	$("#panel4").unbind('click', pn4left);
	$("#panel4").bind('click', gotoProductsPage);
	checkPosition ();
	check();
};

function pn2right (evt) {
	if (active == 'pp4') {
			$("#panel4").animate({left: '770'}, 200);
			$("#panel3").animate({left: '700'}, 200);
			$("#panel2").animate({left: '625'}, 200);
	} else if (active == 'pp3') {
			$("#panel3").animate({left: '700'}, 200);
			$("#panel2").animate({left: '625'}, 200);
	} else {
		$("#panel2").animate({left: '625'}, 200);
	};
	active = 'pp1';
	$("#panel1").unbind('click', pn2right);
	$("#panel1").bind('click', gotoCostsPage);
	pp1 = 'left';
	pp2 = 'right';
	pp3 = 'right';
	pp4 = 'right';
	checkPosition ();
	check();
	//location.reload();
};

function pn3right (evt) {
	if (active == 'pp4' && pp4 == 'left') {
			$("#panel4").animate({left: '770'}, 200);
			$("#panel3").animate({left: '700'}, 200);
			
	} else  {
			$("#panel3").animate({left: '700'}, 200);
			
} ;
	active = 'pp2';
	$("#panel2").unbind('click', pn2left);
	$("#panel2").bind('click', gotoWarrantyPage);
	pp1 = 'left';
	pp2 = 'left';
	pp3 = 'right';
	pp4 = 'right';
	checkPosition ();
	check();
};

function pn4right (evt) {
			if (active == 'pp4') {
			//$("#panel3").animate({left: '700'}, 100);
			$("#panel4").animate({left: '770'}, 200);
			} else {
			$("#panel4").animate({left: '770'}, 200);
			};
			active = 'pp3';	
			$("#panel3").unbind('click', pn3left);
			$("#panel3").bind('click', gotoTechPage);
			checkPosition ();
			pp1 = 'left';
			pp2 = 'left';
			pp4 = 'right';
			pp3 = 'left';
			check();
};
*/

});