// SEC-6 HOVER METER..... *****

function myFunction(obj,img1,img2) {
	var valueImage = obj.find("img");

	// When user mouseenter obj
	valueImage.mouseenter(function(){
		valueImage.attr("src",img1);
	});

	// When user mouseleave obj
	valueImage.mouseleave(function(){
		valueImage.attr("src",img2);
	});
}

myFunction($(".well1"), "img/meter-open.jpg","img/meter.jpg")
myFunction($(".well2"), "img/apolo-open.jpg","img/apolo.jpg")
myFunction($(".well3"), "img/songnhi-open.jpg","img/songnhi.jpg")