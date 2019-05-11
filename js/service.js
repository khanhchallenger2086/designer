//** service-box hover 
$(".service-box").mouseenter(function(){
	$(this).css({"transform": "translate3d(0px,-5px,0px)", "box-shadow": "black 0px 5px 15px 3px"});
})

$(".service-box").mouseleave(function(){
	$(this).css({"transform": "translate3d(0px,0px,0px)", "box-shadow": "none"});
})