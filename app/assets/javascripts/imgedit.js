
window.onload=function() {


var BlurIt = document.getElementById('blur');
var SharpIt = document.getElementById('sharpen');
var GreysIt = document.getElementById('greyscale');
var TintIt = document.getElementById('tint');
var MosaicIt = document.getElementById('mosaic');
var SepiaIt = document.getElementById('sepia');
var SeMosIt = document.getElementById('semos');




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
	document.getElementById('uppic').setAttribute('class', 'filter-blur imageoutp');
	processFilters();
	});

	SharpIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-sharpen imageoutp');
	processFilters();
	});


	GreysIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-greyscale imageoutp');
	processFilters();

	});


	TintIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-tint imageoutp');
	processFilters();
	});

	MosaicIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-mosaic imageoutp');
	processFilters();
	});


	SepiaIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-sepia imageoutp');
	processFilters();
	});

	SeMosIt.addEventListener('click', function(event) {
	document.getElementById('uppic').setAttribute('class', 'filter-sepia filter-mosaic imageoutp');
	processFilters();
	});



	}