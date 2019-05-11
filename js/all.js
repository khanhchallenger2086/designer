// NAV SCROLL *********

$(window).scroll(function(){
	if ($(this).scrollTop() >= 50) {
		$(".navbar").css("background-color","black");
	} else {
		$(".navbar").css("background-color","transparent");
	}
});

// effect animation ul li

var x = $(".media-menu-content ul li");
var o = [50,150,250,350,450,550]; // time of <li> to doing animate margin-left // đặt tên cho phù hợp
var m = [1,1,1,1,1,1,1];	// opacity:1
var u = [0,0,0,0,0,0,0]; // opactiy:0


for (var i = 0; i < x.length; i++ ) {
	effect(i);
};

function effect(n) {
	var y = $('.media-menu-content ul li:eq(' + n + ')');
	

	// $(".media-menu-open").click(function(){
	// 	y.animate({opacity:'1'} ,function() {
	// 		$(this).animate({marginLeft:'0px',transitionDuration: '0.7s'}, o[n])
	// 	});
	// });

	// $(".media-menu-off").click(function(){
	// 	y.animate({marginLeft:100,transitionDuration: '0.7s'}, o[n]);
	// 	y.delay(550);
	// 	y.animate({opacity:"0"});
	// });

	$(".media-menu-open").click(function(){
		y.animate({marginLeft:'0px'},o[n] , function() {
			$(this).animate({opacity:m[n],transitionDuration:'1s'});
		});

			
	});

	$(".media-menu-off").click(function(){
		y.animate({opacity:u[n],transitionDuration:'1s'} , function() {
			$(this).animate({ marginLeft:'100px'}, o[n]);
		});
	});

};

// MEDIA MENU CLICK OPEN AND CLOSE *****

function mediaMenu(open,off,content) {
	open.click(function(){
		content.fadeIn();
	})

	off.click(function(){
		content.delay(1600);
		content.fadeOut();
	});

}

mediaMenu($(".media-menu-open"), $(".media-menu-off"), $(".media-menu-content"));



// effect animtion ul li 

// $(".media-menu-open").click(function(){
// 	$(".media-menu-content ul li:eq(0)").animate({marginLeft:0},500);
// 	$(".media-menu-content ul li:eq(1)").animate({marginLeft:0},600);
// 	$(".media-menu-content ul li:eq(2)").animate({marginLeft:0},700);
// 	$(".media-menu-content ul li:eq(3)").animate({marginLeft:0},800);
// 	$(".media-menu-content ul li:eq(4)").animate({marginLeft:0},900);
// 	$(".media-menu-content ul li:eq(5)").animate({marginLeft:0},1000);
// 	$(".media-menu-content ul li:eq(6)").animate({marginLeft:0});
// })




// click more project 

$(".project-more").click(function(){
	$(".sec-4 .container").css("display", "block");
})