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
			$('header').css('background-color','#A37E58');
			$('h1#header-text').css('color','white');
		}
		else if(x.scrollTop() == 0){
			$('.video-header').fadeIn();
			$('header').css('background-color','rgba(0,0,0,0.2)');
		}
	});
});

var image_dir = [
	'/assets/Leche-Flan.jpg',
	'/assets/ube_halaya.jpg',
	'/assets/Puto.jpg',
	'/assets/Biko.jpg',
	'/assets/Buko-Pandan.jpg',
	'/assets/buko-pie.jpg',
	'/assets/Buko-Salad.jpg',
	'/assets/salad.jpg',
	'/assets/Cassava-Cake.jpg',
	'/assets/ensaymada.jpg',
	'/assets/Cathedral-Window-Jelly-Dessert.jpg',
	'/assets/halo_halo.jpg',
	'/assets/halo_halo2.jpg',
	'/assets/Kutsinta.jpg',
	'/assets/Maja-Blanca.jpg',
	'/assets/pastillas.jpg',
	'/assets/Polvoron.jpg',
	'/assets/Yema.jpg',
	'/assets/yema_cake.jpg'
];

var y = 0;
setInterval(function(){
	if(y > image_dir.length){
		y = 0;
	}
	else{
		var slider = $('#image-slider');
		// var slider = document.getElementById('image-slider');
		if(image_dir[y] != undefined){
			slider.fadeOut(2000,function(){
				$(this).attr('src',image_dir[y]).fadeIn(3000);
			});
		}
		else{
			slider.attr('src','/assets/bibingka.jpg');
		}
		y++;
	}	
},3000);


$(document).ready(function(){
	// Reset Scrolling when not top and loaded
	$('body, html').animate({'scrollTop': 0},1);
});