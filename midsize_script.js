var active = 'pp1';
var right = 'p234';

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
		
//setInterval(checkPosition, 50);	
//$("#message").attr('src', '_images/msn1.png');
		
$("#panel1").bind('click', gotoCostsPage);		
$("#panel2").bind('click', P2Left);
$("#panel3").bind('click', P23Left);
$("#panel4").bind('click', P234Left);
$("#message").bind('click', gotoCostsPage);

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


	function gotoPN1 (evt){
		$("#message").attr('src', '_images/msn1.png');
		$("#message").unbind('click', gotoWarrantyPage);
		$("#panel2 img").unbind('click', gotoWarrantyPage);
		$("#message").unbind('click', gotoTechPage);
		$("#panel3 img").unbind('click', gotoTechPage);		
		$("#message").unbind('click', gotoProductsPage);
		$("#panel4 img").unbind('click', gotoProductsPage);
		$("#message").bind('click', gotoCostsPage);
		$("#panel1 img").bind('click', gotoCostsPage);	
	};
	function gotoPN2 (evt){
		$("#message").attr('src', '_images/msn2.png');
		$("#message").unbind('click', gotoCostsPage);
		$("#panel1 img").unbind('click', gotoCostsPage);	
		$("#message").unbind('click', gotoTechPage);
		$("#panel3 img").unbind('click', gotoTechPage);	
		$("#message").unbind('click', gotoProductsPage);
		$("#panel4 img").unbind('click', gotoProductsPage);	
		$("#message").bind('click', gotoWarrantyPage);
		$("#panel2 img").bind('click', gotoWarrantyPage);	
	};
	function gotoPN3 (evt){
		$("#message").attr('src', '_images/msn3.png');
		$("#message").unbind('click', gotoWarrantyPage);
		$("#panel2 img").unbind('click', gotoWarrantyPage);
		$("#message").unbind('click', gotoProductsPage);
		$("#panel4 img").unbind('click', gotoProductsPage);
		$("#message").unbind('click', gotoCostsPage);
		$("#panel1 img").unbind('click', gotoCostsPage);	
		$("#message").bind('click', gotoTechPage);
		$("#panel3 img").bind('click', gotoTechPage);		
	};
	function gotoPN4 (evt){
		$("#message").attr('src', '_images/msn4.png');
		$("#message").unbind('click', gotoCostsPage);
		$("#panel1 img").unbind('click', gotoCostsPage);	
		$("#message").unbind('click', gotoWarrantyPage);
		$("#panel2 img").unbind('click', gotoWarrantyPage);
		$("#message").unbind('click', gotoTechPage);
		$("#panel3 img").unbind('click', gotoTechPage);	
		$("#message").bind('click', gotoProductsPage);
		$("#panel4 img").bind('click', gotoProductsPage);	
	};


	
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


function checkPosition () {
			if (active == 'pp1') {
					$("#message").attr('src', '_images/msn1.png');
					$("#panel2").css({'left':'625'});
					$("#panel3").css({'left':'700'});
					$("#panel3").css({'left':'770'});
					$("#panel1").bind('click', gotoCostsPage);
					gotoPN1();
			} else if (active == 'pp2') {
					$("#message").attr('src', '_images/msn2.png');
					$("#panel2").css({'left':'150'});
					$("#panel3").css({'left':'700'});
					$("#panel3").css({'left':'770'});	
					gotoPN2();
			} else if (active == 'pp3') {
					$("#message").attr('src', '_images/msn3.png');
					$("#panel2").css({'left':'150'});
					$("#panel3").css({'left':'225'});
					$("#panel3").css({'left':'770'});	
					gotoPN3();
			} else if (active == 'pp4') {
					$("#message").attr('src', '_images/msn4.png');
					$("#panel2").css({'left':'150'});
					$("#panel3").css({'left':'225'});
					$("#panel3").css({'left':'300'});	
					gotoPN4();
			} else {
					$("#panel2").css({'left':'625'});
					$("#panel3").css({'left':'700'});
					$("#panel3").css({'left':'770'});
			};
	
}; 


	
function check () {
		//alert (active);
		
		if (right == 'p234') {
				$("#panel2").css({'left':'625'});
				$("#panel3").css({'left':'700'});
				$("#panel3").css({'left':'770'});
		} else if (right == 'none') {
				$("#panel2").css({'left':'150'});
				$("#panel3").css({'left':'225'});
				$("#panel3").css({'left':'300'});	
		};
	
		if (active == 'pp1') {
				$("#panel1").unbind('click', P234Right);
				$("#panel1").unbind('click', P2Right);
				$("#panel1").bind('click', gotoCostsPage);
				$("#panel2").unbind('click', gotoWarrantyPage);
				$("#panel3").unbind('click', gotoTechPage);
				$("#panel4").unbind('click', gotoProductsPage);
				$("#panel4").unbind('click', P34Left);
				$("#panel2").unbind('click', P34Right);
				$("#panel2").bind('click', P2Left);
				$("#panel3").unbind('click', P3Left);
				$("#panel3").bind('click', P23Left);
				$("#panel4").bind('click', P234Left);
		};
		if (active == 'pp2') {
				
				$("#panel1").unbind('click', gotoCostsPage);
				$("#panel3").unbind('click', gotoTechPage);
				$("#panel4").unbind('click', gotoProductsPage);
				$("#panel1").unbind('click', P234Right);
				$("#panel1").bind('click', P2Right);
				$("#panel2").unbind('click', P34Right);
				$("#panel2").unbind('click', P2Left);
				$("#panel2").bind('click', gotoWarrantyPage);
				$("#panel3").unbind('click', P23Left);
				$("#panel3").unbind('click', P4Right);
				$("#panel3").bind('click', P3Left);
				$("#panel4").unbind('click', P234Left);
				$("#panel4").bind('click', P34Left);
				
		};
		if (active == 'pp3') {
				
				$("#panel1").unbind('click', gotoCostsPage);
				$("#panel2").unbind('click', gotoWarrantyPage);
				$("#panel4").unbind('click', gotoProductsPage);
				$("#panel1").unbind('click', P234Right);
				$("#panel1").bind('click', P23Right);
				$("#panel2").unbind('click', P34Right);
				$("#panel2").unbind('click', P2Left);
				$("#panel2").bind('click', P3Right);
				$("#panel3").unbind('click', P23Left);
				$("#panel3").unbind('click', P3Left);
				$("#panel3").unbind('click', P4Right);
				$("#panel3").bind('click', gotoTechPage);
				$("#panel4").unbind('click', P34Left);
				$("#panel4").unbind('click', P234Left);
				$("#panel4").bind('click', P4Left);
		};
		if (active == 'pp4') {
				
				$("#panel1").unbind('click', gotoCostsPage);
				$("#panel2").unbind('click', gotoWarrantyPage);
				$("#panel3").unbind('click', gotoTechPage);
				$("#panel1").unbind('click', P2Right);
				$("#panel1").unbind('click', P23Right);
				$("#panel1").bind('click', P234Right);
				$("#panel2").unbind('click', P2Left);
				$("#panel2").unbind('click', P3Right);
				$("#panel2").bind('click', P34Right);
				$("#panel3").unbind('click', P23Left);
				$("#panel3").unbind('click', P3Left);
				$("#panel3").bind('click', P4Right);
				$("#panel4").unbind('click', P34Left);
				$("#panel4").unbind('click', P234Left);
				$("#panel4").bind('click', gotoProductsPage);
		};  
};

	
	
//vertical accordion slideshow panels logic &  animation


function P2Left (evt) {
	active = 'pp2'; 
	$('#panel2').animate({left: '150'}, 200, function () {
		active = 'pp2'; 
		gotoPN2();
	});
	active = 'pp2';
	right = 'p34';
	checkPosition();
	check();
	return active;
};
function P3Left (evt) {
	$('#panel3').animate({left: '225'}, 200, function () {
	gotoPN3();
	active = 'pp3'; 
	checkPosition();
	right = 'p4';
	check();
	return active;
	});
	active = 'pp3';
	return active;
};

function P4Left (evt) {
	active = 'pp4'; 
	$('#panel4').animate({left: '300'}, 200, function () {
		gotoPN4();
		active = 'pp4'; 
		right = 'none';
		checkPosition();
		check();
		return active;
	});
	active = 'pp4';
	return active;
};

function P2Right (evt) { 
	$('#panel2').animate({left: '625'}, 200, function () {
		gotoPN1();
		active = 'pp1'; 
		right = 'p234';
		checkPosition();
		check();
		return active;
	});
		active = 'pp1';
		return active;
};
function P3Right (evt) {
	active = 'pp2'; 
	$('#panel3').animate({left: '700'}, 200, function () {
		active = 'pp2'; 
		gotoPN2();
		right = 'p34';
		checkPosition();
		check();
		return active;
	});
		right = 'p34';
		active = 'pp2'; 
		return active;
};
function P4Right (evt) {
		$('#panel4').animate({left: '770'}, 200, function () {
		gotoPN3();	
		active = 'pp3'; 
		right = 'p4';
		checkPosition();
		check();
		return active;
	});
		right = 'p4';
		active = 'pp3';
		return active;
};
function P23Left (evt) {
		active = 'pp3'; 
		$('#panel2').animate({left: '150'}, 200, function () {
		gotoPN3();
		});
		$('#panel3').animate({left: '225'}, 200, function () {		
		active = 'pp3'; 
		return active;
		});
		active = 'pp3'; 
		right = 'p4';
		checkPosition();
		check();
};
function P34Left (evt) {
		active = 'pp4'; 
		$('#panel3').animate({left: '225'}, 200);
		$('#panel4').animate({left: '300'}, 200, function () {
		gotoPN4();
		active = 'pp4'; 
		right = 'none';
		return active;
		});
		active = 'pp4'; 
		checkPosition();
		check();
};

function P234Left (evt) {
		active = 'pp4'; 
		$('#panel2').animate({left: '150'}, 200);
		$('#panel3').animate({left: '225'}, 200);
		$('#panel4').animate({left: '300'}, 200, function () {
		gotoPN4();
		active = 'pp4'; 
		return active;
		});
		active = 'pp4'; 
		right = 'none';
		checkPosition();
		check();
};
function P34Right (evt) {
		active = 'pp2'; 
		$('#panel3').animate({left: '700'}, 200);
		$('#panel4').animate({left: '770'}, 200, function () {
		gotoPN2();
		active = 'pp2'; 
		return active;
		});
		active = 'pp2'; 
		right = 'p34';
		checkPosition();
		check();
};
function P234Right (evt) {
		active = 'pp1'; 
		gotoPN1();
		$('#panel2').animate({left: '625'}, 200);
		$('#panel3').animate({left: '700'}, 200);
		$('#panel4').animate({left: '770'}, 200, function () {
		//$("#panel1").bind('click', gotoCostsPage);
		active = 'pp1'; 
		return active;
		});
		active = 'pp1'; 
		right = 'p234';
		checkPosition();
		check();
};


function P23Right (evt) {
		active = 'pp1'; 
		gotoPN1();
		$('#panel2').animate({left: '625'}, 200);
		$('#panel3').animate({left: '700'}, 200);
		//$('#panel4').animate({left: '770'}, 200, function () {
		$("#panel1").bind('click', gotoCostsPage);
		$("#panel2").bind('click', P2Left);
		active = 'pp1'; 
		active = 'pp1'; 
		right = 'p234';
		checkPosition();
		check();
		return active;
}; 

});