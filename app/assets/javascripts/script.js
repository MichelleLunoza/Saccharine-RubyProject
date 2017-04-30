// Add javascript codes here

console.log("Script has been loaded");

$(document).ready(function(){
	var x = $(window);
	var pos = x.scrollTop();
	// console.log(pos);
	x.scroll(function(){
		// console.log(x.scrollTop());
		if(x.scrollTop() >= 117) {
			$('.video-header').fadeOut();
			$('header').css('background-color','black');
		}
		else if(x.scrollTop() == 0){
			$('.video-header').fadeIn();
			$('header').css('background-color','rgba(0,0,0,0.2)');
		}
	});
});

var image_dir = [
	'/assets/Leche-Flan.jpg',
	'/assets/ube-halaya.jpg',
	'/assets/Puto.jpg'
];
var y = 0;
setInterval(function(){
	if(y > image_dir.length){
		y = 0;
	}
	else{
		var slider = document.getElementById('image-slider');
		if(image_dir[y] != undefined){
			slider.setAttribute('src',image_dir[y]);
			console.log(slider);
		}
		y++;
	}
	
},3000);
