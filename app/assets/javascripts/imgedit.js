
window.onload=function() {


var BlurIt = document.getElementById('blur');
var SharpIt = document.getElementById('sharpen');
var GreysIt = document.getElementById('greyscale');
var TintIt = document.getElementById('tint');
var MosaicIt = document.getElementById('mosaic');
var SepiaIt = document.getElementById('sepia');
var SeMosIt = document.getElementById('semos');
var reset = document.getElementById('reset');



//var Slider = document.getElementById('slider');
// get value from slider
// data-pb looks like is not working as intended
//Slider.addEventListener("input", function(){
//	document.getElementById('testpicture').src = "assets/pic3.jpg"
//	document.getElementById('testpicture').setAttribute('class', 'filter-blur' + ' data-pb-blur-amount', Slider.value)
//	processFilters();
//})



	// un-apply al effects
	// rest of effects

	BlurIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-blur');
	processFilters();
	});

	SharpIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-sharpen');
	processFilters();
	});


	GreysIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-greyscale');
	processFilters();

	});


	TintIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-tint');
	processFilters();
	});

	MosaicIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-mosaic');
	processFilters();
	});


	SepiaIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-sepia');
	processFilters();
	});

	SeMosIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-sepia filter-mosaic');
	processFilters();
	});

	reset.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-greyscale-0');
	processFilters();

	});


	}