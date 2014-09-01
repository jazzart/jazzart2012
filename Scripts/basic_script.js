var panel1position;
var panel2position;
var panel3position;
var panel4position;
var active="pn1" ;

$("document").ready(function() {
		
/*		alert(window.location);
		
		if ($(window).width() <= 1300){
			alert('midsize');
		} */
	
	
		$("#message").bind('click', gotoCostsPage);
		$("#panel1 img").bind('click', gotoCostsPage);	
	
var nm = 'jazzart';
var lm = '.eu';
var dmn = '@gm';
var endg = 'ail.com';

$("#openshow").html(nm + lm + dmn + endg);

//navigation logics

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

	$("#reverse").click(function(){
		//alert('reverse!');
		location.reload();
	});

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
	
	$("#panel2").bind('click', pn2left);
	$("#panel3").bind('click', pn3left);
	$("#panel4").bind('click', pn4left);

	
	check();
	

	
	function check(){

		//detect IE and if it's IE, show reverse button for accordion slideshow'
		if (window.ActiveXObject) {
			$("#reverse").css({'display':'block'})
		}else{ $("#reverse").css({'display':'none'})};
		
		

		
		//conditions for slideshow anims
		if (active=="p2" || active=="p3" || active=="p4")
		{
			$("#rClick1").bind('click', gotoPN1);
			$("#rClick1").bind('click', pnlsGoRight);
					};
		if (active=="p3" || active=="p4")
		{
			$("#rClick2").bind('click', gotoPN2);
			$("#rClick2").bind('click', pn2right );
			} ; 
		
		if (active=="p3" || active=="p4")
		{
			$("#rClick3").bind('click', gotoPN3);
			$("#rClick3").bind('click', pn3right );
		} ;
		if (panel2position==leftMove){
			$("#panel2").css({'left':"74"});
		};
		if (panel3position==leftMove){
			$("#panel3").css({'left':"140"});
		};
		if (panel4position==leftMove){
			$("#panel4").css({'left':"210"});
		};
		
		if (panel2position==rightMove){
			$("#panel2").css({'left':"780"});
		};
		if (panel3position==rightMove){
			$("#panel3").css({'left':"850"});
		};
		if (panel4position==rightMove){
			$("#panel4").css({'left':"923"});
		};
		if (panel1position==leftPush){
			$("#panel2").css({'left':"780"});
			$("#panel3").css({'left':"850"});
			$("#panel4").css({'left':"923"});
		};
		

	}
	
	

	
	
//vertical accordion slideshow panels logic &  animation

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

function pn2left (evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel2").css({'z-index': '101'});
	$("#panel2").animate({left: '74'}, 500);
	$("#panel3").css({'z-index': '102'});
	$("#panel4").css({'z-index': '103'});
	//$("#panel2").css({'z-index': '1000'});
	panel2position = 'leftMove';
	panel1position = 'left';
	active = "p2";
	gotoPN2();
	check();
	
}
function pn3left (evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel2").css({'z-index': '101'});
	$("#panel3").css({'z-index': '102'});
	$("#panel4").css({'z-index': '103'});
	$("#panel2").animate({left: '74'}, 500, function (){
				$("#panel3").animate({left: '140'}, 500, function(){
								$("#panel3").css({'z-index': '102'});
				});
	});
	panel2position = 'leftMove';
	panel3position = 'leftMove';
	panel1position = 'left';
	active = "p3";
	gotoPN3();
	check();
}

function pn4left (evt){
	$("#panel1").css({'z-index': '100'});
	$("#panel2").css({'z-index': '101'});
	$("#panel3").css({'z-index': '102'});
	$("#panel4").css({'z-index': '103'});
	$("#panel2").animate({left: '74'}, 250, function(){
			$("#panel3").animate({left: '140'}, 250, function(){
					$("#panel3").animate({left: '140'}, 250, function(){
							$("#panel4").animate({left: '210'}, 500);
					})});
					
	});
	//$("#panel4").css({'z-index': '1000'});
	panel1position = 'left';
	panel2position = 'leftMove';
	panel3position = 'leftMove';
	panel4position = 'leftMove';
	active = "p4";
	gotoPN4();
	check();
}

function pn2right (evt){
	$("#panel1, #panel2, #panel3, #panel4").css({'z-index': '100'});
	$("#panel4").animate({left: '923'}, 500);
	$("#panel3").animate({left: '850'}, 500);
	//$("#panel2").animate({left: '780'}, 500);
	$("#panel3").css({'z-index': '101'});
	$("#panel4").css({'z-index': '102'});
	$("#panel2").css({'z-index': '100'});
	//$("#panel1, #panel3, #panel4").fadeTo("400", 0.8);
	panel1position = 'left';
	panel2position = 'rightMove';
	panel3position = 'rightMove';
	panel4position = 'rightMove';
	active = "p2";
	check();
	
}
function pn3right(evt){
	//$("#panel2").animate({left: '74'}, 20);
	$("#panel2").css({'z-index': '101'});
	//$("#panel3").animate({left: '850'}, 500);
	$("#panel4").animate({left: '923'}, 500);
	$("#panel4").css({'z-index': '102'});
	$("#panel3").css({'z-index': '101'});
	panel1position = 'left';
	panel2position = 'leftMove';
	panel3position = 'rightMove';
	panel4position = 'rightMove';
	active = "p3";
	check();
}
function pnlsGoRight(evt){
	$("#panel4").animate({left: '923'}, 500, function(){
			$("#panel2").css({'z-index': '100'});
			$("#panel3").css({'z-index': '101'});		
			$("#panel4").css({'z-index': '102'});
			$("#panel3").animate({left: '850'}, 500, function(){
					$("#panel2").animate({left: '780'}, 500, function(){
									$("#panel1").css({'z-index': '100'});
					});
			});
	});
 	panel1position = 'leftPush';
	panel2position = 'leftMove';
	panel3position = 'leftMove';
	panel4position = 'leftMove';
	active = "p1";
	check();
}


});