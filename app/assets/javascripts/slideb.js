window.onload=function(){

var BlurIt = document.getElementById('blur');
var SharpIt = document.getElementById('sharpen');
var EdgeIt = document.getElementById('edges');
var EmbossIt = document.getElementById('emboss');
var GreysIt = document.getElementById('greyscale');
var TintIt = document.getElementById('tint')

//add event listener
	BlurIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic4.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-blur');
	processFilters();
	});

	SharpIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic4.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-sharpen');
	processFilters();
	});


	EdgeIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic4.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-edges');
	processFilters();
	});


	EmbossIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic4.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-emboss');
	processFilters();
	});


	GreysIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic4.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-greyscale');
	processFilters();
	});


	TintIt.addEventListener('click', function(event) {
	document.getElementById('testpicture').src = "assets/pic4.jpg"
	document.getElementById('testpicture').setAttribute('class', 'filter-tint');
	processFilters();
	});
	}