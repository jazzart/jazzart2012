var panel1position;
var panel2position;
var panel3position;
var panel4position;
var active = "p1";

$(document).ready(function() {
//navigation logics
	check();
	
	function check(){
	$("#rClick1").css({'display': 'none'});
	$("#rClick2").css({'display': 'none'});
	$("#rClick3").css({'display': 'none'});
	$("#rClick4").css({'display': 'none'});
		
	
	if (panel2position=='right')
	{
		$("#lClick2").css({'display': 'none'});
		$("#rClick2").css({'display': 'block'})
	}
	else {
		$("#lClick2").css({'display': 'block'});
		$("#rClick2").css({'display': 'none'});
	};
	
	if (panel3position=='right')
	{
		$("#lClick3").css({'display': 'none'});
		$("#rClick3").css({'display': 'block'});
		$("#lClick2").css({'display': 'none'});
		$("#panel2").css({'z-index': '100'});
	}
	else {
		$("#lClick3").css({'display': 'block'});
		$("#rClick3").css({'display': 'none'});
	
		}
	if (panel4position=='right')
	{
		$("#lClick4").css({'display': 'none'});
		$("#lClick3").css({'display': 'none'});
		$("#rClick3").css({'display': 'block'});
		$("#lClick2").css({'display': 'none'});
		$("#panel2").css({'z-index': '100'});
		$("#panel3").css({'z-index': '101'});
	}
	else {
		$("#lClick4").css({'display': 'block'});
		$("#rClick4").css({'display': 'none'});
	
		}	

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
	
	
//vertical slideshow panels logic

$("#lClick2").click(function(evt){
	//$("#lClick2").css({'display': 'none'})
	$("#panel1, #panel2, #panel3, #panel4").fadeTo("fast", 1);
	$("#panel2").css({'z-index': '1000'});
	$("#panel2").animate({left: '74'}, 500);
	$("#panel1, #panel3, #panel4").fadeTo("400", 0.8);
	panel2position = 'right';
	active = "p2";
	check();
});

$("#lClick3").click(function(evt){
	//$("#lClick2").css({'display': 'none'})
	$("#panel1, #panel2, #panel3, #panel4").fadeTo("10", 1);
	$("#panel3").css({'z-index': '1000'});
	$("#panel3").animate({left: '140'}, 500);
	$("#panel2").animate({left: '74'}, 500);
	$("#panel1, #panel2, #panel4").fadeTo("400", 0.8);
	panel2position = 'right';
	panel3position = 'right';
	active = "p3";
	check();
});


$("#lClick4").click(function(evt){
	//$("#lClick2").css({'display': 'none'})
	$("#panel1, #panel2, #panel3, #panel4").fadeTo("10", 1);
	$("#panel4").css({'z-index': '1000'});
	$("#panel4").animate({left: '210'}, 500);
	$("#panel3").animate({left: '140'}, 500);
	$("#panel2").animate({left: '74'}, 500);
	$("#panel1, #panel2, #panel3").fadeTo("400", 0.8);
	panel2position = 'right';
	panel3position = 'right';
	panel4position = 'right';
	active = "p4";
	check();
});

});