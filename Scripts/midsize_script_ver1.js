var pp1 = 'left';
var pp2 = 'right';
var pp3 = 'right';
var pp4 = 'right';
var active = 'pp1';


$("document").ready(function() {

/*		alert(window.location);
		
		if ($(window).width() <= 1300){
			alert('midsize');
		} */


$("#panel2").bind('click', pn2left);
$("#panel3").bind('click', pn3left);
$("#panel4").bind('click', pn4left);


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


function checkPosition () {
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
	
}


	
function check () {

		//detect IE and if it's IE, show reverse button for accordion slideshow'
		if (window.ActiveXObject) {
			$("#reverse").css({'display':'block'})
		}
		else{ 
			$("#reverse").css({'display':'none'})
		};
		
		
		
		if (pp1 == 'left' && active == 'pp1') {

			$("#panel2").bind('click', pn2left);
			$("#panel3").bind('click', pn3left);
			$("#panel4").bind('click', pn4left);
			$("#panel1").unbind('click', pn2right);
			$("#panel1").bind('click', gotoCostsPage);
		} else {
			$("#panel1").unbind('click', gotoCostsPage);
			
		};
		
		if (pp2 == 'left' && active == 'pp2') {

			$("#panel3").bind('click', pn3left);
			$("#panel4").bind('click', pn4left);
			$("#panel2").unbind('click', pn2left);
			$("#panel1").bind('click', pn2right);
			$("#panel2").bind('click', gotoWarrantyPage);
		} else {
			$("#panel2").unbind('click', gotoWarrantyPage);
		};
		
		if (pp3 == 'left' && active == 'pp3') {

			$("#panel3").unbind('click', pn3left);
			$("#panel4").bind('click', pn4left);
			$("#panel1").bind('click', pn2right);
			$("#panel2").bind('click', pn3right);
			$("#panel3").bind('click', gotoTechPage);
		} else {
			$("#panel3").unbind('click', gotoTechPage);
		};
		
		if (pp4 == 'left' && active == 'pp4') {

			$("#panel4").unbind('click', pn4left);
			$("#panel1").bind('click', pn2right);
			$("#panel2").bind('click', pn3right);
			$("#panel3").bind('click', pn4right);
			if (pp4 == 'left') {
			$("#panel4").bind('click', gotoProductsPage);}
			else {
			$("#panel4").unbind('click', gotoProductsPage);	
			$("#panel4").bind('click', pn4left);
			};
		} else {
			$("#panel4").unbind('click', gotoProductsPage);
		};
		
}

	
	
//vertical accordion slideshow panels logic &  animation



function pn2left (evt) {
	$("#panel2").animate({left: '150'}, 100);
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


});