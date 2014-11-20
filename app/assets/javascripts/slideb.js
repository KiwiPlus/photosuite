window.onload=function(){

var BlurIt = document.getElementById('blur');
var SharpIt = document.getElementById('sharpen');
var EdgeIt = document.getElementById('edges');
var EmbossIt = document.getElementById('emboss');
var GreysIt = document.getElementById('greyscale');
var TintIt = document.getElementById('tint');
var Slider = document.getElementById('slider');
var reset = document.getElementById('reset')
// get value from slider
// data-pb looks like is not working as intended
//Slider.addEventListener("input", function(){
//	document.getElementById('testpicture').src = "assets/pic3.jpg"
//	document.getElementById('testpicture').setAttribute('class', 'filter-blur' + ' data-pb-blur-amount', Slider.value)
//	processFilters();
//})





// un-apply al effects
	reset.addEventListener('click', function(event) {
		document.getElementById('testpicture').src = "assets/pic3.jpg"
		document.getElementById('testpicture').setAttribute('class', '');
	});
// rest of effects
	BlurIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic3.jpg" // prevents effects from adding up
	document.getElementById('testpicture').setAttribute('class', 'filter-blur');
	processFilters();
	});

	SharpIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic3.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-sharpen');
	processFilters();
	});


	EdgeIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic3.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-edges');
	processFilters();
	});


	EmbossIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic3.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-emboss');
	processFilters();
	});


	GreysIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic3.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-greyscale');
	processFilters();
	});


	TintIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic3.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-tint');
	processFilters();
	});
	}