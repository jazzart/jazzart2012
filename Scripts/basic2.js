var panel1position;
var panel2position;
var panel3position;
var panel4position;
var active ;

$(document).ready(function() {
//navigation logics
	function gotoPN1 (evt){}
	function gotoPN2 (evt){}
	function gotoPN3 (evt){}
	function gotoPN4 (evt){}
	
	$("#panel2").bind('click', pn2left);
	$("#panel3").bind('click', pn3left);
	$("#panel4").bind('click', pn4left);

	
	check();
	
	function check(){
		if (active=="p1")
		{
			$("#panel1").unbind('click', pnlsGoRight);
			$("#panel2").bind('click', pn2left);
			$("#panel3").bind('click', pn3left);
			$("#panel4").bind('click', pn4left);
			gotoPN1();
		}  else if (active=="p2"){
			$("#panel2").unbind('click', pn2left);
			$("#panel1").bind('click', pnlsGoRight);
			$("#panel3").bind('click', pn3left);
			$("#panel4").bind('click', pn4left);
			gotoPN2();
		} else if (active=="p3") {
			$("#panel1").bind('click', pnlsGoRight);
			$("#panel2").bind('click', pn2right);
			$("#panel2").unbind('click', pn2left);
			$("#panel3").unbind('click', pn3left);
			$("#panel4").bind('click', pn4left);
			gotoPN3();
		} else if (active=="p4"){
			$("#panel1").bind('click', pnlsGoRight);
			$("#panel2").unbind('click', pn2left);
			$("#panel3").unbind('click', pn3left);
			$("#panel4").unbind('click', pn4left);
			$("#panel2").bind('click', pn2right);
			$("#panel3").bind('click', pn3right);
			gotoPN4();
		}
		/*if (panel1position == 'leftPush' && active=='p1'){
			$("#panel4").animate({left: '923'}, 100);
			$("#panel3").animate({left: '850'}, 100);
			$("#panel2").animate({left: '780'}, 100);
		}*/

	}
	
	
	function showFn (evt){
			//alert("bim!");
			//$("#hProducts").addClass('hide');	
			$("#products").fadeIn(300);
	};
	function show2Fn (evt){
			//alert("bim!");
			//$("#hProducts").addClass('hide');	
			$("#about").fadeIn(300);
	};
	function show3Fn (evt){
			//alert("bim!");
			//$("#hProducts").addClass('hide');	
			$("#more").fadeIn(300);
	};
	function hideFn (evt){
			//alert("bam!");
			//$("#hProducts").removeClass('hide');
			$(this).fadeOut(100);
			
	};
	
	function hideAll (evt){
			//alert("bam!");
			//$("#hProducts").removeClass('hide');
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
	
	
//vertical accordion slideshow panels logic


function pn2left (evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel2").animate({left: '74'}, 500);
	//$("#panel1, #panel3, #panel4").fadeTo("400", 0.8);
	$("#panel2").css({'z-index': '1000'});
	panel2position = 'leftMove';
	active = "p2";
	check();
	
}
function pn3left (evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel3").animate({left: '140'}, 500);
	$("#panel2").animate({left: '74'}, 500);
	$("#panel3").css({'z-index': '1000'});
	panel3position = 'leftMove';
	active = "p3";
	check();
}

function pn4left (evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel4").animate({left: '210'}, 500);
	$("#panel3").animate({left: '140'}, 500);
	$("#panel2").animate({left: '74'}, 500);
	$("#panel4").css({'z-index': '1000'});
	panel4position = 'leftMove';
	active = "p4";
	check();
}

function pn2right (evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel4").animate({left: '923'}, 20);
	$("#panel3").animate({left: '850'}, 20);
	$("#panel2").animate({left: '780'}, 20);
	$("#panel3").css({'z-index': '101'});
	$("#panel4").css({'z-index': '102'});
	$("#panel2").css({'z-index': '100'});
	//$("#panel1, #panel3, #panel4").fadeTo("400", 0.8);
	panel2position = 'leftMove';
	active = "p2";
	check();
	
}
function pn3right(evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel2").animate({left: '74'}, 20);
	$("#panel2").css({'z-index': '101'});
	$("#panel3").animate({left: '850'}, 20);
	$("#panel4").animate({left: '923'}, 20);
	$("#panel4").css({'z-index': '102'});
	$("#panel3").css({'z-index': '1000'});
	panel3position = 'rightMove';
	active = "p3";
	check();
}
function pnlsGoRight(evt){
	$("#panel4").animate({left: '923'}, 420, function(){
			$("#panel2").css({'z-index': '100'});
			$("#panel3").css({'z-index': '101'});		
			$("#panel4").css({'z-index': '102'});
			$("#panel3").animate({left: '850'}, 520, function(){
					$("#panel2").animate({left: '780'}, 620, function(){
									$("#panel1").css({'z-index': '1000'});
					});
			});
	});
 
	

	//$("#panel2 #panel3, #panel4").fadeTo("400", 0.8);
	panel1position = 'leftPush';
	active = "p1";
	check();
}


});